import React from 'react';
import { TestCategoryCard } from './TestCategoryCard';
import { testCategories } from '../data/testCategories';
import { BookOpen, Crown, Lock } from 'lucide-react';

interface CategoryListViewProps {
  isPremium: boolean;
  onSelectCategory: (categoryId: string) => void;
  telegramUserId?: string;
}

export const CategoryListView: React.FC<CategoryListViewProps> = ({
  isPremium,
  onSelectCategory,
  telegramUserId
}) => {
  const freeCategories = testCategories.filter(cat => !cat.isPremium);
  const premiumCategories = testCategories.filter(cat => cat.isPremium);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Test Categories
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive collection of nursing test categories. 
          Each category contains multiple specialized subcategories to help you prepare effectively.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-blue-200">
          <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900">
            {isPremium ? testCategories.length : freeCategories.length}
          </div>
          <div className="text-sm text-blue-700">Available Categories</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-green-200">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-green-600 font-bold text-lg">Q</span>
          </div>
          <div className="text-2xl font-bold text-green-900">
            {testCategories.reduce((sum, cat) => sum + cat.totalQuestions, 0)}
          </div>
          <div className="text-sm text-green-700">Total Questions</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-purple-200">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-purple-600 font-bold text-lg">T</span>
          </div>
          <div className="text-2xl font-bold text-purple-900">
            {Math.round(testCategories.reduce((sum, cat) => sum + cat.totalTime, 0) / 60)}h
          </div>
          <div className="text-sm text-purple-700">Study Hours</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-yellow-200">
          {isPremium ? (
            <Crown className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          ) : (
            <Lock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
          )}
          <div className="text-2xl font-bold text-yellow-900">
            {isPremium ? 'Premium' : 'Free'}
          </div>
          <div className="text-sm text-yellow-700">Account Type</div>
        </div>
      </div>

      {/* Free Categories */}
      {freeCategories.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Free Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCategories.map((category) => (
              <TestCategoryCard
                key={category.id}
                category={category}
                onStart={onSelectCategory}
                isPremium={isPremium}
              />
            ))}
          </div>
        </div>
      )}

      {/* Premium Categories */}
      {premiumCategories.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-600" />
            Premium Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumCategories.map((category) => (
              <TestCategoryCard
                key={category.id}
                category={category}
                onStart={onSelectCategory}
                isPremium={isPremium}
              />
            ))}
          </div>
        </div>
      )}

      {/* Premium Upgrade Banner */}
      {!isPremium && premiumCategories.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
          <div className="text-center">
            <Crown className="w-12 h-12 mx-auto mb-4 text-yellow-100" />
            <h3 className="text-2xl font-semibold mb-2">Unlock Premium Categories</h3>
            <p className="text-yellow-100 mb-4 max-w-2xl mx-auto">
              Get access to {premiumCategories.length} premium test categories with specialized content, 
              detailed explanations, and advanced analytics to boost your nursing exam preparation.
            </p>
            
            {telegramUserId && (
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4 max-w-md mx-auto">
                <p className="text-sm mb-2 text-yellow-100">
                  Contact our bot with your Telegram ID:
                </p>
                <p className="font-mono bg-white bg-opacity-20 px-3 py-2 rounded text-yellow-100">
                  {telegramUserId}
                </p>
              </div>
            )}
            
            <button 
              onClick={() => window.open('https://t.me/ModuleRoBot', '_blank')}
              className="bg-white text-yellow-600 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-50 transition-colors"
            >
              Get Premium Access
            </button>
          </div>
        </div>
      )}
    </div>
  );
};