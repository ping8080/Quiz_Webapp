import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { TelegramUser, UserProfile } from '../types/telegram';

export const useAuth = (telegramUser: TelegramUser | null) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (telegramUser) {
      authenticateUser(telegramUser);
    } else {
      setLoading(false);
    }
  }, [telegramUser]);

  const authenticateUser = async (tgUser: TelegramUser) => {
    try {
      // Check if user exists
      let { data: existingUser } = await supabase
        .from('users')
        .select('*')
        .eq('telegram_user_id', tgUser.id.toString())
        .single();

      if (!existingUser) {
        // Create new user
        const { data: newUser, error } = await supabase
          .from('users')
          .insert([
            {
              telegram_user_id: tgUser.id.toString(),
              first_name: tgUser.first_name,
              last_name: tgUser.last_name || null,
              username: tgUser.username || null,
            },
          ])
          .select()
          .single();

        if (error) throw error;
        existingUser = newUser;
      }

      setProfile(existingUser);
      
      // Check premium status
      const premiumStatus = checkPremiumStatus(existingUser.premium_expires_at);
      setIsPremium(premiumStatus);
      
    } catch (error) {
      console.error('Error authenticating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkPremiumStatus = (expiresAt: string | null): boolean => {
    if (!expiresAt) return false;
    return new Date(expiresAt) > new Date();
  };

  const refreshProfile = async () => {
    if (!profile) return;
    
    try {
      const { data: updatedProfile } = await supabase
        .from('users')
        .select('*')
        .eq('telegram_user_id', profile.telegram_user_id)
        .single();

      if (updatedProfile) {
        setProfile(updatedProfile);
        const premiumStatus = checkPremiumStatus(updatedProfile.premium_expires_at);
        setIsPremium(premiumStatus);
      }
    } catch (error) {
      console.error('Error refreshing profile:', error);
    }
  };

  return {
    profile,
    loading,
    isPremium,
    refreshProfile,
  };
};