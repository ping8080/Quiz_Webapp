import React from 'react';
import { Crown, Lock } from 'lucide-react';

interface PremiumBadgeProps {
  isPremium: boolean;
  expiresAt?: string | null;
  showDetails?: boolean;
}

export const PremiumBadge: React.FC<PremiumBadgeProps> = ({ 
  isPremium, 
  expiresAt, 
  showDetails = false 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (isPremium) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full text-sm font-medium shadow-md">
        <Crown className="w-4 h-4" />
        <span>Premium</span>
        {showDetails && expiresAt && (
          <span className="text-yellow-100 text-xs">
            Until {formatDate(expiresAt)}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-500 text-white rounded-full text-sm font-medium">
      <Lock className="w-4 h-4" />
      <span>Free</span>
    </div>
  );
};