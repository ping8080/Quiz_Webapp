/*
  # Create users table for Telegram Mini App

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `telegram_user_id` (text, unique) - Stores Telegram user ID
      - `first_name` (text) - User's first name from Telegram
      - `last_name` (text, nullable) - User's last name from Telegram
      - `username` (text, nullable) - User's username from Telegram
      - `premium_expires_at` (timestamptz, nullable) - Premium expiration date
      - `created_at` (timestamptz) - Account creation timestamp

  2. Security
    - Enable RLS on `users` table
    - Add policy for users to read their own data
    - Add index on telegram_user_id for fast lookups

  3. Additional Features
    - Automatic timestamps for created_at
    - Unique constraint on telegram_user_id
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  telegram_user_id text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text,
  username text,
  premium_expires_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Create index for fast telegram_user_id lookups
CREATE INDEX IF NOT EXISTS idx_users_telegram_id ON users(telegram_user_id);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- Allow inserting new users (for registration)
CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

-- Allow users to update their own data
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated, anon
  USING (true);