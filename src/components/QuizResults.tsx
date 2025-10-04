import React from 'react';
import { Trophy, Clock, Target, RotateCcw, Home } from 'lucide-react';
import { QuizResults as QuizResultsType } from '../types/quiz';

interface QuizResultsProps {
  results: QuizResultsType;
  onRetry: () => void;
  onHome: () => void;
  isPremium: boolean;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  results,
  onRetry,
  onHome,
  isPremium
}) => {
  const getScoreColor = () => {
    if (results.percentage >= 80) return 'text-green-600';
    if (results.percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = () => {
    if (results.percentage >= 80) return 'bg-green-100';
    if (results.percentage >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getPerformanceMessage = () => {
    if (results.percentage >= 90) return 'Outstanding! 🎉';
    if (results.percentage >= 80) return 'Excellent work! 👏';
    if (results.percentage >= 70) return 'Good job! 👍';
    if (results.percentage >= 60) return 'Not bad! 😊';
    return 'Keep practicing! 💪';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
      {/* Trophy Icon */}
      <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${getScoreBgColor()}`}>
        <Trophy className={`w-10 h-10 ${getScoreColor()}`} />
      </div>

      {/* Performance Message */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {getPerformanceMessage()}
      </h2>
      <p className="text-gray-600 mb-8">
        You've completed the quiz successfully!
      </p>

      {/* Score Display */}
      <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 ${getScoreBgColor()}`}>
        <div className="text-center">
          <div className={`text-3xl font-bold ${getScoreColor()}`}>
            {results.percentage}%
          </div>
          <div className="text-sm text-gray-600">
            {results.score}/{results.totalQuestions}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900">{results.score}</div>
          <div className="text-sm text-blue-700">Correct Answers</div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-900">
            {formatTime(results.timeTaken)}
          </div>
          <div className="text-sm text-purple-700">Time Taken</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <Trophy className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-900">
            {results.percentage >= 80 ? 'A' : results.percentage >= 60 ? 'B' : 'C'}
          </div>
          <div className="text-sm text-green-700">Grade</div>
        </div>
      </div>

      {/* Premium Features */}
      {isPremium && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-900 mb-2">Premium Analytics</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-yellow-700">Average Time per Question:</span>
              <div className="font-semibold text-yellow-900">
                {Math.round(results.timeTaken / results.totalQuestions)}s
              </div>
            </div>
            <div>
              <span className="text-yellow-700">Accuracy Rate:</span>
              <div className="font-semibold text-yellow-900">{results.percentage}%</div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Try Again
        </button>
        
        <button
          onClick={onHome}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  );
};