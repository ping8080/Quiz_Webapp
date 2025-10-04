import { createClient } from 'npm:@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const TELEGRAM_BOT_TOKEN = '8385145824:AAHpn-Cc60KlJlvPAASWedVp93rbzain0r4';
const ADMIN_TELEGRAM_ID = '7109179238';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

interface TelegramUpdate {
  message?: {
    message_id: number;
    from: {
      id: number;
      first_name: string;
      username?: string;
    };
    text: string;
    chat: {
      id: number;
    };
  };
}

interface GrantPremiumRequest {
  action: 'grant';
  telegram_user_id: string;
  duration: string; // e.g., "1m", "6m", "1y"
  admin_id: string;
}

interface RevokePremiumRequest {
  action: 'revoke';
  telegram_user_id: string;
  admin_id: string;
}

// Parse duration string to days
function parseDuration(duration: string): number {
  const match = duration.match(/^(\d+)([dmyh])$/);
  if (!match) throw new Error('Invalid duration format');
  
  const [, amount, unit] = match;
  const num = parseInt(amount);
  
  switch (unit) {
    case 'h': return num / 24; // hours to days
    case 'd': return num;       // days
    case 'm': return num * 30;  // months to days (approximate)
    case 'y': return num * 365; // years to days
    default: throw new Error('Invalid duration unit');
  }
}

// Send message to Telegram
async function sendTelegramMessage(chatId: number, text: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  });
}

// Grant premium access
async function grantPremium(telegramUserId: string, duration: string): Promise<string> {
  try {
    const days = parseDuration(duration);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + days);

    const { data, error } = await supabase
      .from('users')
      .update({ premium_expires_at: expiresAt.toISOString() })
      .eq('telegram_user_id', telegramUserId)
      .select();

    if (error) throw error;
    
    if (!data || data.length === 0) {
      return `❌ User with Telegram ID ${telegramUserId} not found.`;
    }

    return `✅ Premium access granted to user ${telegramUserId} until ${expiresAt.toLocaleDateString()}.`;
  } catch (error) {
    return `❌ Error granting premium: ${error.message}`;
  }
}

// Revoke premium access
async function revokePremium(telegramUserId: string): Promise<string> {
  try {
    const { data, error } = await supabase
      .from('users')
      .update({ premium_expires_at: null })
      .eq('telegram_user_id', telegramUserId)
      .select();

    if (error) throw error;
    
    if (!data || data.length === 0) {
      return `❌ User with Telegram ID ${telegramUserId} not found.`;
    }

    return `✅ Premium access revoked for user ${telegramUserId}.`;
  } catch (error) {
    return `❌ Error revoking premium: ${error.message}`;
  }
}

// Check if user is admin
function isAdmin(telegramId: number): boolean {
  return telegramId.toString() === ADMIN_TELEGRAM_ID;
}

// Handle Telegram bot commands
async function handleTelegramUpdate(update: TelegramUpdate) {
  if (!update.message?.text) return;

  const message = update.message;
  const chatId = message.chat.id;
  const userId = message.from.id;
  const text = message.text.trim();

  // Check if user is admin
  if (!isAdmin(userId)) {
    await sendTelegramMessage(chatId, '❌ You are not authorized to use this bot.');
    return;
  }

  // Handle /start command
  if (text === '/start') {
    const welcomeMsg = `
🤖 <b>Premium Management Bot</b>

Available commands:
• <code>/grantpremium [telegram_id] [duration]</code>
  Grant premium access (e.g., /grantpremium 123456789 1m)

• <code>/revokepremium [telegram_id]</code>
  Revoke premium access

• <code>/checkpremium [telegram_id]</code>
  Check premium status

<b>Duration formats:</b>
• h = hours (e.g., 24h)
• d = days (e.g., 30d)  
• m = months (e.g., 6m)
• y = years (e.g., 1y)

You are logged in as Admin ID: <code>${userId}</code>
    `;
    
    await sendTelegramMessage(chatId, welcomeMsg);
    return;
  }

  // Handle /grantpremium command
  const grantMatch = text.match(/^\/grantpremium\s+(\d+)\s+(\w+)$/);
  if (grantMatch) {
    const [, targetUserId, duration] = grantMatch;
    const result = await grantPremium(targetUserId, duration);
    await sendTelegramMessage(chatId, result);
    return;
  }

  // Handle /revokepremium command
  const revokeMatch = text.match(/^\/revokepremium\s+(\d+)$/);
  if (revokeMatch) {
    const [, targetUserId] = revokeMatch;
    const result = await revokePremium(targetUserId);
    await sendTelegramMessage(chatId, result);
    return;
  }

  // Handle /checkpremium command
  const checkMatch = text.match(/^\/checkpremium\s+(\d+)$/);
  if (checkMatch) {
    const [, targetUserId] = checkMatch;
    
    try {
      const { data, error } = await supabase
        .from('users')
        .select('first_name, premium_expires_at')
        .eq('telegram_user_id', targetUserId)
        .single();

      if (error || !data) {
        await sendTelegramMessage(chatId, `❌ User with Telegram ID ${targetUserId} not found.`);
        return;
      }

      const now = new Date();
      const expiresAt = data.premium_expires_at ? new Date(data.premium_expires_at) : null;
      const isPremium = expiresAt && expiresAt > now;

      let statusMsg = `👤 <b>User:</b> ${data.first_name}\n`;
      statusMsg += `🆔 <b>Telegram ID:</b> <code>${targetUserId}</code>\n`;
      statusMsg += `💎 <b>Status:</b> ${isPremium ? '✅ Premium' : '❌ Free'}\n`;
      
      if (isPremium && expiresAt) {
        statusMsg += `⏰ <b>Expires:</b> ${expiresAt.toLocaleDateString()}`;
      }

      await sendTelegramMessage(chatId, statusMsg);
    } catch (error) {
      await sendTelegramMessage(chatId, `❌ Error checking premium status: ${error.message}`);
    }
    return;
  }

  // Unknown command
  await sendTelegramMessage(chatId, '❌ Unknown command. Type /start to see available commands.');
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    
    // Handle Telegram webhook
    if (req.method === 'POST' && url.pathname === '/webhook') {
      const update: TelegramUpdate = await req.json();
      await handleTelegramUpdate(update);
      
      return new Response('OK', {
        headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
      });
    }

    // Handle premium management API
    if (req.method === 'POST' && url.pathname === '/manage-premium') {
      const body = await req.json();
      
      // Verify admin
      if (!isAdmin(parseInt(body.admin_id))) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }), 
          { 
            status: 403, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      let result: string;
      
      if (body.action === 'grant') {
        result = await grantPremium(body.telegram_user_id, body.duration);
      } else if (body.action === 'revoke') {
        result = await revokePremium(body.telegram_user_id);
      } else {
        return new Response(
          JSON.stringify({ error: 'Invalid action' }), 
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      return new Response(
        JSON.stringify({ message: result }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Health check
    if (req.method === 'GET' && url.pathname === '/health') {
      return new Response(
        JSON.stringify({ 
          status: 'healthy', 
          timestamp: new Date().toISOString(),
          bot_token_configured: !!TELEGRAM_BOT_TOKEN,
          admin_id: ADMIN_TELEGRAM_ID
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response('Not Found', { 
      status: 404, 
      headers: corsHeaders 
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});