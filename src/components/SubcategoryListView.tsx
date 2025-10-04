import React from 'react';
import { testCategories } from '../data/testCategories';
import { ArrowLeft, BookOpen, Clock, Users, Award, Crown, Lock } from 'lucide-react';

interface SubcategoryListViewProps {
  categoryId: string;
  isPremium: boolean;
  onSelectSubcategory: (subcategoryId: string) => void;
  onBack: () => void;
  telegramUserId?: string;
}

export const SubcategoryListView: React.FC<SubcategoryListViewProps> = ({
  categoryId,
  isPremium,
  onSelectSubcategory,
  onBack,
  telegramUserId
}) => {
  const category = testCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Category Not Found</h2>
          <p className="text-red-600 mb-4">The requested category could not be found.</p>
          <button
            onClick={onBack}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const freeSubcategories = category.subcategories.filter(sub => !sub.isPremium);
  const premiumSubcategories = category.subcategories.filter(sub => sub.isPremium);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="text-3xl">{category.icon}</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-900">
              {isPremium ? category.subcategories.length : freeSubcategories.length}
            </div>
            <div className="text-sm text-blue-700">Available Tests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-900">{category.totalQuestions}</div>
            <div className="text-sm text-green-700">Total Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-900">{category.totalTime}m</div>
            <div className="text-sm text-purple-700">Study Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-900">
              {category.isPremium ? 'Premium' : 'Free'}
            </div>
            <div className="text-sm text-yellow-700">Category Type</div>
          </div>
        </div>
      </div>

      {/* Free Subcategories */}
      {freeSubcategories.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Free Tests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeSubcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => onSelectSubcategory(subcategory.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {subcategory.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(subcategory.difficulty)}`}>
                      {subcategory.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{subcategory.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{subcategory.questionCount} Questions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{subcategory.estimatedTime}m</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Start Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Premium Subcategories */}
      {premiumSubcategories.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-600" />
            Premium Tests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumSubcategories.map((subcategory) => {
              const isLocked = !isPremium;
              
              return (
                <div
                  key={subcategory.id}
                  className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                    isLocked 
                      ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-75' 
                      : 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-xl'
                  }`}
                  onClick={() => !isLocked && onSelectSubcategory(subcategory.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {subcategory.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Crown className="w-4 h-4 text-yellow-600" />
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(subcategory.difficulty)}`}>
                          {subcategory.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{subcategory.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{subcategory.questionCount} Questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{subcategory.estimatedTime}m</span>
                      </div>
                    </div>
                    
                    <button
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                        isLocked
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white'
                      }`}
                      disabled={isLocked}
                    >
                      {isLocked ? (
                        <div className="flex items-center justify-center gap-2">
                          <Lock className="w-4 h-4" />
                          Premium Required
                        </div>
                      ) : (
                        'Start Test'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Premium Upgrade Banner */}
      {!isPremium && premiumSubcategories.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-yellow-100" />
            <h3 className="text-2xl font-semibold mb-2">Unlock Premium Tests</h3>
            <p className="text-yellow-100 mb-4 max-w-2xl mx-auto">
              Get access to {premiumSubcategories.length} premium tests in this category with 
              detailed explanations, advanced analytics, and comprehensive preparation materials.
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