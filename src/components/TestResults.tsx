import React from 'react';
import { Trophy, Clock, Target, RotateCcw, ArrowLeft, Home, Award, TrendingUp } from 'lucide-react';
import { TestResults as TestResultsType } from '../types/test';
import { TestCategory, TestSubcategory } from '../types/category';

interface TestResultsProps {
  results: TestResultsType;
  category?: TestCategory;
  subcategory?: TestSubcategory;
  onRetry: () => void;
  onBack: () => void;
  onHome: () => void;
  isPremium: boolean;
}

export const TestResults: React.FC<TestResultsProps> = ({
  results,
  category,
  subcategory,
  onRetry,
  onBack,
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
    if (results.percentage >= 90) return 'Outstanding Performance! 🎉';
    if (results.percentage >= 80) return 'Excellent Work! 👏';
    if (results.percentage >= 70) return 'Good Job! 👍';
    if (results.percentage >= 60) return 'Not Bad! 😊';
    return 'Keep Practicing! 💪';
  };

  const getGrade = () => {
    if (results.percentage >= 90) return 'A+';
    if (results.percentage >= 80) return 'A';
    if (results.percentage >= 70) return 'B';
    if (results.percentage >= 60) return 'C';
    return 'D';
  };

  const getPerformanceLevel = () => {
    if (results.percentage >= 90) return { level: 'Exceptional', color: 'text-green-700', bg: 'bg-green-50' };
    if (results.percentage >= 80) return { level: 'Excellent', color: 'text-green-600', bg: 'bg-green-50' };
    if (results.percentage >= 70) return { level: 'Good', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (results.percentage >= 60) return { level: 'Average', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { level: 'Needs Improvement', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const performance = getPerformanceLevel();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Test Results</h1>
              <p className="text-sm text-gray-600">
                {category?.name} • {subcategory?.name}
              </p>
            </div>
          </div>
          
          <button
            onClick={onHome}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Results Card */}
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
          You've completed the {subcategory?.name || 'test'} successfully!
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-900">{results.score}</div>
            <div className="text-sm text-blue-700">Correct</div>
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
              {getGrade()}
            </div>
            <div className="text-sm text-green-700">Grade</div>
          </div>

          <div className={`rounded-lg p-4 ${performance.bg}`}>
            <Award className={`w-6 h-6 mx-auto mb-2 ${performance.color}`} />
            <div className={`text-lg font-bold ${performance.color}`}>
              {performance.level}
            </div>
            <div className={`text-xs ${performance.color}`}>Performance</div>
          </div>
        </div>

        {/* Test Information */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Category:</span>
              <div className="font-semibold text-gray-900">{category?.name || 'Test'}</div>
            </div>
            <div>
              <span className="text-gray-600">Test Type:</span>
              <div className="font-semibold text-gray-900">{subcategory?.name || 'Test'}</div>
            </div>
            <div>
              <span className="text-gray-600">Difficulty:</span>
              <div className="font-semibold text-gray-900">{subcategory?.difficulty || 'Medium'}</div>
            </div>
            <div>
              <span className="text-gray-600">Questions:</span>
              <div className="font-semibold text-gray-900">{results.totalQuestions}</div>
            </div>
          </div>
        </div>

        {/* Premium Analytics */}
        {isPremium && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-900 mb-3 flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Premium Analytics
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-yellow-700">Avg. Time per Question:</span>
                <div className="font-semibold text-yellow-900">
                  {Math.round(results.timeTaken / results.totalQuestions)}s
                </div>
              </div>
              <div>
                <span className="text-yellow-700">Accuracy Rate:</span>
                <div className="font-semibold text-yellow-900">{results.percentage}%</div>
              </div>
              <div>
                <span className="text-yellow-700">Wrong Answers:</span>
                <div className="font-semibold text-yellow-900">
                  {results.totalQuestions - results.score}
                </div>
              </div>
              <div>
                <span className="text-yellow-700">Speed Rating:</span>
                <div className="font-semibold text-yellow-900">
                  {results.timeTaken < (results.totalQuestions * 60) ? 'Fast' : 'Normal'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Performance Feedback */}
        <div className={`rounded-lg p-4 mb-6 ${performance.bg}`}>
          <h3 className={`font-semibold mb-2 ${performance.color}`}>Performance Feedback</h3>
          <p className={`text-sm ${performance.color}`}>
            {results.percentage >= 90 && "Exceptional work! You have mastered this topic. Consider taking advanced tests."}
            {results.percentage >= 80 && results.percentage < 90 && "Excellent performance! You have a strong understanding of this subject."}
            {results.percentage >= 70 && results.percentage < 80 && "Good job! Review the topics you missed to improve further."}
            {results.percentage >= 60 && results.percentage < 70 && "Average performance. Focus on studying the weak areas identified."}
            {results.percentage < 60 && "Keep practicing! Review the fundamentals and take more practice tests."}
          </p>
        </div>

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
            onClick={onBack}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Tests
          </button>
        </div>
      </div>
    </div>
  );
};