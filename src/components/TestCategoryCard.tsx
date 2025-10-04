import React from 'react';
import { Clock, BookOpen, Trophy, Lock, Crown } from 'lucide-react';
import { TestCategory } from '../types/category';

interface TestCategoryCardProps {
  category: TestCategory;
  onStart: (categoryId: string) => void;
  isPremium: boolean;
}

export const TestCategoryCard: React.FC<TestCategoryCardProps> = ({
  category,
  onStart,
  isPremium
}) => {
  const isLocked = category.isPremium && !isPremium;

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl relative ${
      category.isPremium 
        ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50' 
        : 'border-gray-200 hover:border-blue-300'
    } ${isLocked ? 'opacity-75' : ''}`}>
      
      {/* Premium Badge */}
      {category.isPremium && (
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-semibold rounded-full">
            <Crown className="w-3 h-3" />
            Premium
          </div>
        </div>
      )}

      {/* Lock Overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-20 rounded-xl flex items-center justify-center z-10">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Lock className="w-8 h-8 text-gray-600" />
          </div>
        </div>
      )}

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
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>{category.totalQuestions} Questions</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{category.totalTime} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gray-600" />
            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600`}>
              Mixed
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Nursing</span>
          </div>
        </div>
        
        <button
          onClick={() => !isLocked && onStart(category.id)}
          disabled={isLocked}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
            isLocked
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : category.isPremium
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isLocked ? 'Premium Required' : 'Start Test'}
        </button>
      </div>
    </div>
  );
};