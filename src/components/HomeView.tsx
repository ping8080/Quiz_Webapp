import React from 'react';
import { UserProfile } from './UserProfile';
import { testCategories } from '../data/testCategories';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Star,
  TrendingUp,
  Award,
  Heart
} from 'lucide-react';
import { UserProfile as UserProfileType } from '../types/telegram';

interface HomeViewProps {
  profile: UserProfileType | null;
  isPremium: boolean;
  onStartTest: (categoryId: string) => void;
  onRefresh: () => void;
  refreshing?: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  profile,
  isPremium,
  onStartTest,
  onRefresh,
  refreshing = false
}) => {
  const freeTests = testCategories.filter(cat => !cat.isPremium);
  const premiumTests = testCategories.filter(cat => cat.isPremium);
  const featuredTests = testCategories.slice(0, 3);

  const stats = {
    totalTests: testCategories.length,
    availableTests: isPremium ? testCategories.length : freeTests.length,
    totalQuestions: testCategories.reduce((sum, cat) => sum + cat.totalQuestions, 0),
    estimatedHours: Math.round(testCategories.reduce((sum, cat) => sum + cat.totalTime, 0) / 60)
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-8 h-8 text-red-500" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🩺 Nursing App 🩺
          </h1>
        </div>
        <p className="text-gray-600">
          All Nursing Help ♥️ - Your Complete Exam Preparation Platform
        </p>
      </div>

      {/* User Profile */}
      {profile && (
        <div className="mb-8">
          <UserProfile 
            profile={profile}
            isPremium={isPremium}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-blue-200">
          <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900">{stats.availableTests}</div>
          <div className="text-sm text-blue-700">Available Tests</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-green-200">
          <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-900">{stats.totalQuestions}</div>
          <div className="text-sm text-green-700">Total Questions</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-purple-200">
          <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-900">{stats.estimatedHours}h</div>
          <div className="text-sm text-purple-700">Study Hours</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-yellow-200">
          <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-900">{isPremium ? 'Premium' : 'Free'}</div>
          <div className="text-sm text-yellow-700">Account Type</div>
        </div>
      </div>

      {/* Featured Tests */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-600" />
          Featured Tests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTests.map((category) => {
            const isLocked = category.isPremium && !isPremium;
            
            return (
              <div
                key={category.id}
                className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  category.isPremium 
                    ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50' 
                    : 'border-gray-200 hover:border-blue-300'
                } ${isLocked ? 'opacity-75' : ''}`}
                onClick={() => !isLocked && onStartTest(category.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{category.totalQuestions} Questions</span>
                    <span>{category.totalTime} mins</span>
                  </div>
                  
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      isLocked
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : category.isPremium
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    disabled={isLocked}
                  >
                    {isLocked ? 'Premium Required' : 'Start Test'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Upgrade Banner */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-yellow-100" />
            <h3 className="text-2xl font-semibold mb-2">Unlock Premium Access</h3>
            <p className="text-yellow-100 mb-4 max-w-2xl mx-auto">
              Get access to {premiumTests.length} comprehensive test categories with over {stats.totalQuestions - freeTests.reduce((sum, cat) => sum + cat.totalQuestions, 0)} questions, 
              detailed explanations, and advanced analytics to boost your nursing exam preparation.
            </p>
            
            {profile?.telegram_user_id && (
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4 max-w-md mx-auto">
                <p className="text-sm mb-2 text-yellow-100">
                  Contact our bot with your Telegram ID:
                </p>
                <p className="font-mono bg-white bg-opacity-20 px-3 py-2 rounded text-yellow-100">
                  {profile.telegram_user_id}
                </p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('https://t.me/ModuleRoBot', '_blank')}
                className="bg-white text-yellow-600 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-50 transition-colors"
              >
                Get Premium Access
              </button>
              <div className="text-yellow-100 text-sm">
                ✓ {premiumTests.length} Premium Categories • ✓ Detailed Explanations • ✓ Progress Tracking
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Study Tips */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          Study Tips for Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Practice Regularly:</strong> Take tests daily to build confidence and identify weak areas.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Review Explanations:</strong> Understand the reasoning behind each correct answer.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Time Management:</strong> Practice under timed conditions to improve speed.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Focus on Weak Areas:</strong> Spend more time on challenging topics.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};