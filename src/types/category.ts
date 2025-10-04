export interface TestSubcategory {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  estimatedTime: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isPremium: boolean;
  icon?: string;
}

export interface TestCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: TestSubcategory[];
  totalQuestions: number;
  totalTime: number; // in minutes
  isPremium: boolean;
}