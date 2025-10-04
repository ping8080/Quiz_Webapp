export interface TestQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface TestCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  totalQuestions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isPremium: boolean;
  estimatedTime: number; // in minutes
}

export interface TestState {
  currentQuestion: number;
  selectedAnswers: (number | null)[];
  showResults: boolean;
  timeRemaining: number;
  isTimerActive: boolean;
  category: string;
}

export interface TestResults {
  score: number;
  totalQuestions: number;
  percentage: number;
  correctAnswers: number[];
  timeTaken: number;
  category: string;
}