import React, { useState, useEffect } from 'react';
import { TestQuestion } from './TestQuestion';
import { TestResults } from './TestResults';
import { testQuestionsByCategory } from '../data/testQuestions';
import { testCategories } from '../data/testCategories';
import { TestState, TestResults as TestResultsType } from '../types/test';
import { ArrowLeft, ArrowRight, Flag, Home, Clock, BookOpen } from 'lucide-react';

interface TestAppProps {
  categoryId: string;
  subcategoryId: string;
  isPremium: boolean;
  onBack: () => void;
  onHome: () => void;
}

export const TestApp: React.FC<TestAppProps> = ({ 
  categoryId, 
  subcategoryId,
  isPremium, 
  onBack, 
  onHome 
}) => {
  const [currentView, setCurrentView] = useState<'test' | 'results'>('test');
  const [testState, setTestState] = useState<TestState>({
    currentQuestion: 0,
    selectedAnswers: [],
    showResults: false,
    timeRemaining: 0,
    isTimerActive: false,
    category: categoryId
  });
  const [results, setResults] = useState<TestResultsType | null>(null);
  const [startTime, setStartTime] = useState<number>(0);

  // Find category and subcategory
  const category = testCategories.find(cat => cat.id === categoryId);
  const subcategory = category?.subcategories.find(sub => sub.id === subcategoryId);
  
  // Get questions - for now using existing questions, but you can create specific question sets
  const questions = testQuestionsByCategory[subcategoryId] || testQuestionsByCategory['nursing-fundamentals'] || [];

  // Check if user has access to this subcategory
  const hasAccess = !subcategory?.isPremium || isPremium;

  useEffect(() => {
    if (!hasAccess) {
      onBack();
      return;
    }

    if (questions.length > 0 && subcategory) {
      const timeLimit = subcategory.estimatedTime * 60; // Convert minutes to seconds
      setTestState({
        currentQuestion: 0,
        selectedAnswers: new Array(questions.length).fill(null),
        showResults: false,
        timeRemaining: timeLimit,
        isTimerActive: true,
        category: categoryId
      });
      setStartTime(Date.now());
    }
  }, [categoryId, subcategoryId, hasAccess, questions.length, subcategory, onBack]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (testState.isTimerActive && testState.timeRemaining > 0 && currentView === 'test') {
      interval = setInterval(() => {
        setTestState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        }));
      }, 1000);
    } else if (testState.timeRemaining === 0 && currentView === 'test') {
      handleFinishTest();
    }

    return () => clearInterval(interval);
  }, [testState.isTimerActive, testState.timeRemaining, currentView]);

  const handleAnswerSelect = (answerIndex: number) => {
    setTestState(prev => {
      const newAnswers = [...prev.selectedAnswers];
      newAnswers[prev.currentQuestion] = answerIndex;
      return {
        ...prev,
        selectedAnswers: newAnswers
      };
    });
  };

  const handleNextQuestion = () => {
    if (testState.currentQuestion < questions.length - 1) {
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const handlePreviousQuestion = () => {
    if (testState.currentQuestion > 0) {
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const handleFinishTest = () => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const correctAnswers = testState.selectedAnswers.map((answer, index) => 
      answer === questions[index].correctAnswer ? index : -1
    ).filter(index => index !== -1);
    
    const score = correctAnswers.length;
    const percentage = Math.round((score / questions.length) * 100);

    const testResults: TestResultsType = {
      score,
      totalQuestions: questions.length,
      percentage,
      correctAnswers,
      timeTaken,
      category: categoryId
    };

    setResults(testResults);
    setTestState(prev => ({ ...prev, isTimerActive: false }));
    setCurrentView('results');
  };

  const resetTest = () => {
    if (!subcategory) return;
    
    const timeLimit = subcategory.estimatedTime * 60;
    setTestState({
      currentQuestion: 0,
      selectedAnswers: new Array(questions.length).fill(null),
      showResults: false,
      timeRemaining: timeLimit,
      isTimerActive: true,
      category: categoryId
    });
    setStartTime(Date.now());
    setResults(null);
    setCurrentView('test');
  };

  // Show error if no access
  if (!hasAccess) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Access Denied</h2>
          <p className="text-red-600 mb-4">This test requires premium access.</p>
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

  // Show error if no subcategory found
  if (!subcategory) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Test Not Found</h2>
          <p className="text-yellow-600 mb-4">The requested test could not be found.</p>
          <button
            onClick={onBack}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Show error if no questions
  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-md mx-auto">
          <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Questions Coming Soon</h2>
          <p className="text-blue-600 mb-4">
            Questions for "{subcategory.name}" are being prepared and will be available soon.
          </p>
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (currentView === 'results' && results) {
    return (
      <TestResults
        results={results}
        category={category}
        subcategory={subcategory}
        onRetry={resetTest}
        onBack={onBack}
        onHome={onHome}
        isPremium={isPremium}
      />
    );
  }

  const currentQuestion = questions[testState.currentQuestion];
  const selectedAnswer = testState.selectedAnswers[testState.currentQuestion];

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
              <h1 className="text-lg font-semibold text-gray-900">
                {subcategory.name}
              </h1>
              <p className="text-sm text-gray-600">
                {category?.name} • Question {testState.currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">
                {Math.floor(testState.timeRemaining / 60)}:{(testState.timeRemaining % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <button
              onClick={onHome}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Question */}
      <TestQuestion
        question={currentQuestion}
        currentQuestion={testState.currentQuestion}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        timeRemaining={testState.timeRemaining}
      />

      {/* Navigation */}
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <button
          onClick={handlePreviousQuestion}
          disabled={testState.currentQuestion === 0}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {testState.selectedAnswers.filter(a => a !== null).length} of {questions.length} answered
          </span>
          
          <button
            onClick={handleFinishTest}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <Flag className="w-4 h-4" />
            Finish Test
          </button>
        </div>

        <button
          onClick={handleNextQuestion}
          disabled={testState.currentQuestion === questions.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};