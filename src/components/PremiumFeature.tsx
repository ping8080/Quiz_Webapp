import React from 'react';
import { Crown, Lock } from 'lucide-react';

interface PremiumFeatureProps {
  title: string;
  description: string;
  isPremium: boolean;
  telegramUserId?: string;
  children?: React.ReactNode;
}

export const PremiumFeature: React.FC<PremiumFeatureProps> = ({
  title,
  description,
  isPremium,
  telegramUserId,
  children,
}) => {
  if (isPremium) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-6 h-6 text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-gray-50 bg-opacity-90 flex items-center justify-center z-10">
        <div className="text-center p-6">
          <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Premium Feature</h4>
          <p className="text-sm text-gray-600 mb-4">
            This feature requires premium access
          </p>
          {telegramUserId && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
              <p className="text-gray-700 mb-2">
                Contact our bot to get premium access:
              </p>
              <p className="font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">
                Your ID: {telegramUserId}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="p-6 blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <Crown className="w-6 h-6 text-yellow-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};