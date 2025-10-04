import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          telegram_user_id: string;
          first_name: string;
          last_name: string | null;
          username: string | null;
          premium_expires_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          telegram_user_id: string;
          first_name: string;
          last_name?: string | null;
          username?: string | null;
          premium_expires_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          telegram_user_id?: string;
          first_name?: string;
          last_name?: string | null;
          username?: string | null;
          premium_expires_at?: string | null;
          created_at?: string;
        };
      };
    };
  };
};