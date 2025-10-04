# Quiz App - General Knowledge Quiz with Premium System

A comprehensive Quiz application built as a Telegram Mini App with premium subscription management.

## Features

### 🚀 Core Features
- **Telegram Mini App Integration**: Full SDK integration with user authentication
- **Interactive Quiz System**: 100 comprehensive general knowledge questions
- **Real-time Timer**: Countdown timer for quiz sessions
- **Detailed Results**: Score analysis with performance metrics
- **Premium Access Control**: Time-based premium subscription system
- **Admin Bot Commands**: Manual premium management through Telegram bot
- **Responsive Design**: Mobile-optimized interface for Telegram environment
- **Real-time Status Updates**: Dynamic premium status checking and refresh

### 💎 Premium Features
- **Complete Question Bank**: Access to all 100 questions (vs 20 free questions)
- **Extended Time Limits**: 50 minutes for premium vs 20 minutes for free
- **Advanced Analytics**: Detailed performance metrics and time analysis
- **Question Categories**: Organized by topics (Geography, History, Current Affairs, etc.)
- **Detailed Explanations**: Comprehensive explanations for all answers

### 📚 Quiz Content
- **Geography**: Rivers, climate, and physical features of India
- **Economy**: GDP, industries, and economic policies
- **Government**: Institutions, awards, and governance
- **History**: Freedom struggle and historical events
- **Current Affairs**: Recent Nobel prizes, awards, and events
- **Culture**: Festivals, arts, and traditions
- **Sports**: Recent tournaments and achievements
## Configuration

### Bot Information
- **Bot Token**: `8385145824:AAHpn-Cc60KlJlvPAASWedVp93rbzain0r4`
- **Admin Telegram ID**: `7109179238`

### Environment Setup

1. **Set up Supabase**: Click "Connect to Supabase" in the top right
2. **Configure environment variables** in `.env`:
```env
VITE_SUPABASE_URL=https://brrzgfziguwtflsouhiq.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycnpnZnppZ3V3dGZsc291aGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMzQ4NDYsImV4cCI6MjA3MzkxMDg0Nn0.hHDEZueHmbK9phMQ_r1ybrruZzxeWUTCvYsE7aq0sTk
```

### Database Schema

The system uses a `users` table with the following structure:
- `id` (UUID, Primary Key)
- `telegram_user_id` (Text, Unique) - Links to Telegram user
- `first_name` (Text) - User's first name
- `last_name` (Text, Nullable) - User's last name  
- `username` (Text, Nullable) - Telegram username
- `premium_expires_at` (Timestamp, Nullable) - Premium expiration date
- `created_at` (Timestamp) - Registration date

## Bot Commands

### Admin Commands
- `/start` - Show welcome message and available commands
- `/grantpremium <telegram_id> <duration>` - Grant premium access
- `/revokepremium <telegram_id>` - Revoke premium access
- `/checkpremium <telegram_id>` - Check premium status

### Duration Formats
- `h` - Hours (e.g., `24h`)
- `d` - Days (e.g., `30d`)
- `m` - Months (e.g., `6m`) 
- `y` - Years (e.g., `1y`)

### Examples
```
/grantpremium 123456789 1m    # Grant 1 month premium
/grantpremium 987654321 30d   # Grant 30 days premium
/revokepremium 123456789      # Revoke premium access
/checkpremium 123456789       # Check premium status
```

## Telegram Mini App Setup

### 1. Configure Bot Web App
Use BotFather to set your bot's Mini App URL:
```
/setmenubutton
@your_bot_username
- Button text: "Open App"
- Web App URL: https://your-app-domain.com
```

### 2. Web App URL Configuration
Configure your bot's `web_app_url` to point to your hosted application URL.

## Deployment

### Using Bolt Hosting
The application is ready for deployment on Bolt Hosting with HTTPS support required for Telegram Mini Apps.

### Webhook Setup
Set up your Telegram bot webhook to point to your Edge Function:
```
https://api.telegram.org/bot<8385145824:AAHpn-Cc60KlJlvPAASWedVp93rbzain0r4>/setWebhook?url=https://brrzgfziguwtflsouhiq.supabase.co/functions/v1/bot-premium-manager/webhook
```

## Security Features

- **Row Level Security (RLS)**: Enabled on all database tables
- **Admin Verification**: Bot commands restricted to authorized admin ID
- **Secure Token Handling**: Bot token and sensitive data properly secured
- **HTTPS Required**: All communications encrypted

## Technical Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Supabase (Database + Edge Functions)
- **Integration**: Telegram Mini App SDK + Bot API
- **Hosting**: Bolt Hosting (HTTPS)
- **Icons**: Lucide React

## User Flow

1. **User opens Mini App** through Telegram bot
2. **Automatic Registration** with Telegram user data
3. **Premium Status Check** on app load
4. **Content Access Control** based on premium status
5. **Admin Management** through bot commands

## Support

For premium access, users should:
1. Contact the Telegram bot
2. Provide their Telegram ID (shown in the app)
3. Follow payment instructions
4. Receive immediate premium access

This system provides a complete solution for Telegram Mini App development with premium subscription management.