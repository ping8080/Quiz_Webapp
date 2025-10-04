export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: string;
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswers: (number | null)[];
  showResults: boolean;
  timeRemaining: number;
  isTimerActive: boolean;
}

export interface QuizResults {
  score: number;
  totalQuestions: number;
  percentage: number;
  correctAnswers: number[];
  timeTaken: number;
}