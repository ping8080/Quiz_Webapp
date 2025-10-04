import React from 'react';
import { Clock, BookOpen, Trophy, Users } from 'lucide-react';

interface QuizCardProps {
  title: string;
  description: string;
  totalQuestions: number;
  timeLimit: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isPremium?: boolean;
  onStart: () => void;
  disabled?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  totalQuestions,
  timeLimit,
  difficulty,
  isPremium = false,
  onStart,
  disabled = false
}) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
      isPremium ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50' : 'border-gray-200 hover:border-blue-300'
    } ${disabled ? 'opacity-60' : ''}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {isPremium && (
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-semibold rounded-full">
              Premium
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>{totalQuestions} Questions</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{timeLimit} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gray-600" />
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>General Knowledge</span>
          </div>
        </div>
        
        <button
          onClick={onStart}
          disabled={disabled}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
            disabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isPremium
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {disabled ? 'Premium Required' : 'Start Quiz'}
        </button>
      </div>
    </div>
  );
};