import { useState, useEffect } from 'react';
import { TelegramUser } from '../types/telegram';

export const useTelegram = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initTelegram = () => {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        
        // Initialize Telegram WebApp
        tg.ready();
        tg.expand();
        
        // Get user data
        if (tg.initDataUnsafe?.user) {
          setUser({
            id: tg.initDataUnsafe.user.id,
            first_name: tg.initDataUnsafe.user.first_name,
            last_name: tg.initDataUnsafe.user.last_name,
            username: tg.initDataUnsafe.user.username,
          });
        }
        
        setIsReady(true);
      }
    };

    // Try to initialize immediately
    initTelegram();
    
    // Fallback: retry after a short delay if not ready
    const timer = setTimeout(initTelegram, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const showMainButton = (text: string, callback: () => void) => {
    if (window.Telegram?.WebApp?.MainButton) {
      const mainButton = window.Telegram.WebApp.MainButton;
      mainButton.text = text;
      mainButton.onClick(callback);
      mainButton.show();
    }
  };

  const hideMainButton = () => {
    if (window.Telegram?.WebApp?.MainButton) {
      window.Telegram.WebApp.MainButton.hide();
    }
  };

  return {
    user,
    isReady,
    tg: window.Telegram?.WebApp,
    showMainButton,
    hideMainButton,
  };
};