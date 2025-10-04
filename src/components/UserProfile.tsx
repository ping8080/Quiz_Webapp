import React from 'react';
import { User, RefreshCw } from 'lucide-react';
import { UserProfile as UserProfileType } from '../types/telegram';
import { PremiumBadge } from './PremiumBadge';

interface UserProfileProps {
  profile: UserProfileType;
  isPremium: boolean;
  onRefresh: () => void;
  refreshing?: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  profile,
  isPremium,
  onRefresh,
  refreshing = false,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {profile.first_name} {profile.last_name}
            </h2>
            {profile.username && (
              <p className="text-sm text-gray-600">@{profile.username}</p>
            )}
          </div>
        </div>
        <button
          onClick={onRefresh}
          disabled={refreshing}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Status:</span>
          <PremiumBadge 
            isPremium={isPremium} 
            expiresAt={profile.premium_expires_at}
            showDetails={true}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Telegram ID:</span>
          <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
            {profile.telegram_user_id}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Member since:</span>
          <span className="text-sm text-gray-800">
            {new Date(profile.created_at).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};