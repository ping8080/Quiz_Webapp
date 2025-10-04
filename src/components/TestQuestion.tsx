import React from 'react';
import { Clock, HelpCircle } from 'lucide-react';
import { TestQuestion as TestQuestionType } from '../types/test';

interface TestQuestionProps {
  question: TestQuestionType;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  timeRemaining: number;
  showExplanation?: boolean;
}

export const TestQuestion: React.FC<TestQuestionProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  timeRemaining,
  showExplanation = false
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeRemaining > 300) return 'text-green-600'; // > 5 minutes
    if (timeRemaining > 60) return 'text-yellow-600';  // > 1 minute
    return 'text-red-600';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Question {currentQuestion + 1} of {totalQuestions}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{question.category}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty}
              </span>
            </div>
          </div>
        </div>
        
        <div className={`flex items-center gap-2 ${getTimeColor()}`}>
          <Clock className="w-5 h-5" />
          <span className="font-mono text-lg font-semibold">
            {formatTime(timeRemaining)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-relaxed">
          {question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = showExplanation && index === question.correctAnswer;
          const isWrong = showExplanation && isSelected && index !== question.correctAnswer;
          
          let buttonClass = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
          
          if (showExplanation) {
            if (isCorrect) {
              buttonClass += 'border-green-500 bg-green-50 text-green-800';
            } else if (isWrong) {
              buttonClass += 'border-red-500 bg-red-50 text-red-800';
            } else {
              buttonClass += 'border-gray-200 bg-gray-50 text-gray-600';
            }
          } else if (isSelected) {
            buttonClass += 'border-blue-500 bg-blue-50 text-blue-800';
          } else {
            buttonClass += 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-800';
          }

          return (
            <button
              key={index}
              onClick={() => !showExplanation && onAnswerSelect(index)}
              disabled={showExplanation}
              className={buttonClass}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                  showExplanation
                    ? isCorrect
                      ? 'border-green-500 bg-green-500 text-white'
                      : isWrong
                      ? 'border-red-500 bg-red-500 text-white'
                      : 'border-gray-300 bg-gray-100 text-gray-600'
                    : isSelected
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 bg-white text-gray-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};