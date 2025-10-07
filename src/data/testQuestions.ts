// testQuestions.ts

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Subcategory {
  id: number;
  name: string;
  questions: Question[];
}

export interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

// Common sample questions (you can edit them later)
const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "What is the main function of red blood cells?",
    options: ["To carry oxygen", "To fight infection", "To digest food", "To form bones"],
    correctAnswer: "To carry oxygen",
  },
  {
    id: 2,
    text: "Which organ is responsible for pumping blood in the human body?",
    options: ["Lungs", "Heart", "Kidneys", "Liver"],
    correctAnswer: "Heart",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Grand Test",
    subcategories: [
      { id: 1, name: "Grand Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "Grand Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 2,
    name: "HYT",
    subcategories: [
      { id: 1, name: "HYT Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "HYT Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 3,
    name: "MCQ",
    subcategories: [
      { id: 1, name: "MCQ Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "MCQ Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 4,
    name: "NST",
    subcategories: [
      { id: 1, name: "NST Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "NST Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 5,
    name: "NSAT",
    subcategories: [
      { id: 1, name: "NSAT Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "NSAT Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 6,
    name: "NNT [Pre & Mains]",
    subcategories: [
      { id: 1, name: "NNT Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "NNT Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 7,
    name: "Nursing Educath",
    subcategories: [
      { id: 1, name: "Nursing Educath Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "Nursing Educath Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 8,
    name: "Special Test",
    subcategories: [
      { id: 1, name: "Special Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "Special Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 9,
    name: "Subject Assessment Test (SAT)",
    subcategories: [
      { id: 1, name: "SAT Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "SAT Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 10,
    name: "Super 15 Test (Mains)",
    subcategories: [
      { id: 1, name: "Super 15 Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "Super 15 Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 11,
    name: "Super 30 Test [P&M]",
    subcategories: [
      { id: 1, name: "Super 30 Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "Super 30 Test 2", questions: [...sampleQuestions] },
    ],
  },
  {
    id: 12,
    name: "Super 50",
    subcategories: [
      { id: 1, name: "Super 50 Test 1", questions: [...sampleQuestions] },
      { id: 2, name: "Super 50 Test 2", questions: [...sampleQuestions] },
    ],
  },
];
