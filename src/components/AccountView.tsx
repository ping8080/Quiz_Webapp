import React from 'react';
import { UserProfile } from './UserProfile';
import { PremiumBadge } from './PremiumBadge';
import { 
  User, 
  Crown, 
  Calendar, 
  Clock, 
  Trophy, 
  BookOpen,
  TrendingUp,
  Award,
  Settings,
  HelpCircle
} from 'lucide-react';
import { UserProfile as UserProfileType } from '../types/telegram';

interface AccountViewProps {
  profile: UserProfileType | null;
  isPremium: boolean;
  onRefresh: () => void;
  refreshing?: boolean;
}

export const AccountView: React.FC<AccountViewProps> = ({
  profile,
  isPremium,
  onRefresh,
  refreshing = false
}) => {
  if (!profile) {
    return (
      <div className="text-center py-12">
        <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">No Profile Found</h2>
        <p className="text-gray-500">Unable to load your account information.</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getDaysUntilExpiry = () => {
    if (!profile.premium_expires_at) return null;
    const expiryDate = new Date(profile.premium_expires_at);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysUntilExpiry = getDaysUntilExpiry();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <User className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Account
          </h1>
        </div>
        <p className="text-gray-600">
          Manage your profile and subscription
        </p>
      </div>

      {/* User Profile Card */}
      <UserProfile 
        profile={profile}
        isPremium={isPremium}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />

      {/* Account Details */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Settings className="w-6 h-6 text-gray-600" />
          Account Details
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">Full Name</span>
            </div>
            <span className="font-semibold text-gray-900">
              {profile.first_name} {profile.last_name || ''}
            </span>
          </div>
          
          {profile.username && (
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">@</span>
                <span className="text-gray-700">Username</span>
              </div>
              <span className="font-semibold text-gray-900">@{profile.username}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-gray-500">#</span>
              <span className="text-gray-700">Telegram ID</span>
            </div>
            <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-gray-800">
              {profile.telegram_user_id}
            </span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">Member Since</span>
            </div>
            <span className="font-semibold text-gray-900">
              {formatDate(profile.created_at)}
            </span>
          </div>
        </div>
      </div>

      {/* Subscription Status */}
      <div className={`rounded-xl shadow-lg p-6 border-2 ${
        isPremium 
          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Crown className="w-6 h-6 text-yellow-600" />
          Subscription Status
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Current Plan</span>
            <PremiumBadge isPremium={isPremium} />
          </div>
          
          {isPremium && profile.premium_expires_at && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Expires On</span>
                <span className="font-semibold text-gray-900">
                  {formatDate(profile.premium_expires_at)}
                </span>
              </div>
              
              {daysUntilExpiry !== null && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Days Remaining</span>
                  <span className={`font-semibold ${
                    daysUntilExpiry > 30 ? 'text-green-600' : 
                    daysUntilExpiry > 7 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {daysUntilExpiry} days
                  </span>
                </div>
              )}
            </>
          )}
          
          {!isPremium && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Upgrade to Premium</h4>
              <p className="text-blue-800 text-sm mb-3">
                Unlock all test categories, detailed explanations, and advanced analytics.
              </p>
              <button 
                onClick={() => window.open('https://t.me/ModuleRoBot', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Get Premium Access
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Study Statistics (Premium Feature) */}
      <div className={`rounded-xl shadow-lg p-6 border border-gray-200 ${
        !isPremium ? 'relative overflow-hidden' : 'bg-white'
      }`}>
        {!isPremium && (
          <div className="absolute inset-0 bg-gray-50 bg-opacity-90 flex items-center justify-center z-10">
            <div className="text-center">
              <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Premium Feature</h4>
              <p className="text-sm text-gray-600">
                Upgrade to view detailed study statistics
              </p>
            </div>
          </div>
        )}
        
        <div className={!isPremium ? 'blur-sm' : ''}>
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Study Statistics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">12</div>
              <div className="text-sm text-blue-700">Tests Taken</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-900">85%</div>
              <div className="text-sm text-green-700">Average Score</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-900">24h</div>
              <div className="text-sm text-purple-700">Study Time</div>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-900">7</div>
              <div className="text-sm text-yellow-700">Streak Days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          Help & Support
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-700">Contact Support</span>
            <button 
              onClick={() => window.open('https://t.me/NursingExamBot', '_blank')}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              @Admin
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-700">App Version</span>
            <span className="text-gray-500">v1.0.0</span>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-700">Last Updated</span>
            <span className="text-gray-500">January 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};
