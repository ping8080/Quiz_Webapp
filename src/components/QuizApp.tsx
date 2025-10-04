import React, { useState, useEffect } from 'react';
import { QuizCard } from './QuizCard';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { quizQuestions, premiumQuizQuestions } from '../data/quizData';
import { QuizState, QuizResults as QuizResultsType } from '../types/quiz';
import { ArrowLeft, ArrowRight, Flag } from 'lucide-react';

interface QuizAppProps {
  isPremium: boolean;
  telegramUserId?: string;
}

export const QuizApp: React.FC<QuizAppProps> = ({ isPremium, telegramUserId }) => {
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'results'>('home');
  const [selectedQuizType, setSelectedQuizType] = useState<'free' | 'premium'>('free');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswers: [],
    showResults: false,
    timeRemaining: 1200, // 20 minutes
    isTimerActive: false
  });
  const [results, setResults] = useState<QuizResultsType | null>(null);
  const [startTime, setStartTime] = useState<number>(0);

  const currentQuestions = selectedQuizType === 'premium' ? 
    [...quizQuestions, ...premiumQuizQuestions] : quizQuestions;

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (quizState.isTimerActive && quizState.timeRemaining > 0 && currentView === 'quiz') {
      interval = setInterval(() => {
        setQuizState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        }));
      }, 1000);
    } else if (quizState.timeRemaining === 0) {
      handleFinishQuiz();
    }

    return () => clearInterval(interval);
  }, [quizState.isTimerActive, quizState.timeRemaining, currentView]);

  const startQuiz = (type: 'free' | 'premium') => {
    if (type === 'premium' && !isPremium) return;
    
    setSelectedQuizType(type);
    const questions = type === 'premium' ? [...quizQuestions, ...premiumQuizQuestions] : quizQuestions;
    
    setQuizState({
      currentQuestion: 0,
      selectedAnswers: new Array(questions.length).fill(null),
      showResults: false,
      timeRemaining: type === 'premium' ? 3000 : 1200, // 50 mins for premium, 20 for free
      isTimerActive: true
    });
    setStartTime(Date.now());
    setCurrentView('quiz');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setQuizState(prev => {
      const newAnswers = [...prev.selectedAnswers];
      newAnswers[prev.currentQuestion] = answerIndex;
      return {
        ...prev,
        selectedAnswers: newAnswers
      };
    });
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < currentQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const handlePreviousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const handleFinishQuiz = () => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const correctAnswers = quizState.selectedAnswers.map((answer, index) => 
      answer === currentQuestions[index].correctAnswer ? index : -1
    ).filter(index => index !== -1);
    
    const score = correctAnswers.length;
    const percentage = Math.round((score / currentQuestions.length) * 100);

    const quizResults: QuizResultsType = {
      score,
      totalQuestions: currentQuestions.length,
      percentage,
      correctAnswers,
      timeTaken
    };

    setResults(quizResults);
    setQuizState(prev => ({ ...prev, isTimerActive: false }));
    setCurrentView('results');
  };

  const resetQuiz = () => {
    setCurrentView('home');
    setQuizState({
      currentQuestion: 0,
      selectedAnswers: [],
      showResults: false,
      timeRemaining: 1200,
      isTimerActive: false
    });
    setResults(null);
  };

  if (currentView === 'results' && results) {
    return (
      <QuizResults
        results={results}
        onRetry={() => startQuiz(selectedQuizType)}
        onHome={resetQuiz}
        isPremium={isPremium}
      />
    );
  }

  if (currentView === 'quiz') {
    const currentQuestion = currentQuestions[quizState.currentQuestion];
    const selectedAnswer = quizState.selectedAnswers[quizState.currentQuestion];

    return (
      <div className="space-y-6">
        <QuizQuestion
          question={currentQuestion}
          currentQuestion={quizState.currentQuestion}
          totalQuestions={currentQuestions.length}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          timeRemaining={quizState.timeRemaining}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <button
            onClick={handlePreviousQuestion}
            disabled={quizState.currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {quizState.selectedAnswers.filter(a => a !== null).length} of {currentQuestions.length} answered
            </span>
            
            <button
              onClick={handleFinishQuiz}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <Flag className="w-4 h-4" />
              Finish Quiz
            </button>
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={quizState.currentQuestion === currentQuestions.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          General Knowledge Quiz
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Test your knowledge with our comprehensive quiz collection. Choose from free basic questions 
          or unlock premium content for the complete experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <QuizCard
          title="Free Quiz"
          description="Basic general knowledge questions covering geography, history, and current affairs."
          totalQuestions={20}
          timeLimit={20}
          difficulty="Easy"
          onStart={() => startQuiz('free')}
        />

        <QuizCard
          title="Premium Quiz"
          description="Complete collection with 100 questions covering all topics including latest current affairs and Nobel prizes."
          totalQuestions={100}
          timeLimit={50}
          difficulty="Hard"
          isPremium={true}
          onStart={() => startQuiz('premium')}
          disabled={!isPremium}
        />
      </div>

      {!isPremium && (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Unlock Premium Quiz</h3>
            <p className="text-yellow-100 mb-4">
              Get access to 100 comprehensive questions with detailed explanations and advanced analytics.
            </p>
            {telegramUserId && (
              <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-4">
                <p className="text-sm mb-2">Contact our bot with your Telegram ID:</p>
                <p className="font-mono bg-white bg-opacity-20 px-2 py-1 rounded">
                  {telegramUserId}
                </p>
              </div>
            )}
            <button 
              onClick={() => window.open('https://t.me/ModuleRoBot', '_blank')}
              className="bg-white text-yellow-600 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-50 transition-colors"
            >
              Get Premium Access
            </button>
          </div>
        </div>
      )}
    </div>
  );
};