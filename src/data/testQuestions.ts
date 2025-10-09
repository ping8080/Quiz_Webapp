import { TestQuestion } from '../types/test';
import { testCategories } from './testCategories';

// Generate placeholder questions for all categories and subcategories
const generatePlaceholderQuestions = (): Record<string, TestQuestion[]> => {
  const allQuestions: Record<string, TestQuestion[]> = {};
  let questionIdCounter = 1;

  testCategories.forEach((category) => {
    if (category.subcategories && category.subcategories.length > 0) {
      // Category has subcategories - generate questions for each subcategory
      category.subcategories.forEach((subcategory) => {
        const questions: TestQuestion[] = [];
        const questionCount = Math.min(subcategory.totalQuestions || 25, 50); // Limit to 50 questions per subcategory
        
        for (let i = 0; i < questionCount; i++) {
          questions.push({
            id: questionIdCounter++,
            question: `${subcategory.name} - Sample Question ${i + 1}: What is an important concept in ${category.name.toLowerCase()}?`,
            options: [
              `Option A for ${subcategory.name}`,
              `Option B for ${subcategory.name}`,
              `Option C for ${subcategory.name}`,
              `Option D for ${subcategory.name}`
            ],
            correctAnswer: i % 4, // Rotate correct answers
            explanation: `This is a sample explanation for ${subcategory.name} question ${i + 1}. In ${category.name.toLowerCase()}, this concept is fundamental to understanding the subject matter.`,
            category: category.name,
            difficulty: subcategory.difficulty
          });
        }
        
        allQuestions[subcategory.id] = questions;
      });
    } else {
      // Category without subcategories - generate questions directly for the category
      const questions: TestQuestion[] = [];
      const questionCount = Math.min(category.totalQuestions || 25, 50); // Limit to 50 questions per category
      
      for (let i = 0; i < questionCount; i++) {
        questions.push({
          id: questionIdCounter++,
          question: `${category.name} - Sample Question ${i + 1}: What is an important concept in ${category.name.toLowerCase()}?`,
          options: [
            `Option A for ${category.name}`,
            `Option B for ${category.name}`,
            `Option C for ${category.name}`,
            `Option D for ${category.name}`
          ],
          correctAnswer: i % 4, // Rotate correct answers
          explanation: `This is a sample explanation for ${category.name} question ${i + 1}. This concept is fundamental to understanding ${category.name.toLowerCase()}.`,
          category: category.name,
          difficulty: category.difficulty || 'Medium'
        });
      }
      
      allQuestions[category.id] = questions;
    }
  });

  return allQuestions;
};

// Generate all test questions automatically
export const testQuestionsByCategory = generatePlaceholderQuestions();

// Sample real questions for nursing fundamentals (you can replace these with actual questions)
const nursingFundamentalsQuestions: TestQuestion[] = [
  {
    id: 10001,
    question: "What is the primary goal of nursing care?",
    options: [
      "To cure diseases",
      "To promote health and prevent illness",
      "To assist doctors",
      "To manage hospital operations"
    ],
    correctAnswer: 1,
    explanation: "The primary goal of nursing is to promote health, prevent illness, and help patients achieve optimal health outcomes.",
    category: "Nursing Fundamentals",
    difficulty: 'Easy'
  },
  {
    id: 10002,
    question: "Which of the following is NOT one of the four fundamental nursing responsibilities?",
    options: [
      "Promote health",
      "Prevent illness",
      "Restore health",
      "Prescribe medications"
    ],
    correctAnswer: 3,
    explanation: "Prescribing medications is typically a physician's responsibility, not a fundamental nursing responsibility.",
    category: "Nursing Fundamentals",
    difficulty: 'Easy'
  },
  {
    id: 10003,
    question: "What does the acronym ADPIE stand for in the nursing process?",
    options: [
      "Assess, Diagnose, Plan, Implement, Evaluate",
      "Analyze, Develop, Perform, Inspect, Execute",
      "Admit, Discharge, Plan, Intervene, Examine",
      "Assess, Document, Prepare, Implement, Educate"
    ],
    correctAnswer: 0,
    explanation: "ADPIE represents the five steps of the nursing process: Assessment, Diagnosis, Planning, Implementation, and Evaluation.",
    category: "Nursing Fundamentals",
    difficulty: 'Medium'
  }
];

// Replace placeholder questions with real ones for nursing fundamentals
if (testQuestionsByCategory['nursing-fundamentals']) {
  testQuestionsByCategory['nursing-fundamentals'] = nursingFundamentalsQuestions;
}

// Sample questions for anatomy & physiology
const anatomyPhysiologyQuestions: TestQuestion[] = [
  {
    id: 10004,
    question: "Which chamber of the heart receives oxygenated blood from the lungs?",
    options: [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle"
    ],
    correctAnswer: 2,
    explanation: "The left atrium receives oxygenated blood from the pulmonary veins returning from the lungs.",
    category: "Anatomy & Physiology",
    difficulty: 'Medium'
  },
  {
    id: 10005,
    question: "What is the normal range for adult respiratory rate?",
    options: [
      "8-12 breaths per minute",
      "12-20 breaths per minute",
      "20-30 breaths per minute",
      "30-40 breaths per minute"
    ],
    correctAnswer: 1,
    explanation: "The normal respiratory rate for adults is 12-20 breaths per minute at rest.",
    category: "Anatomy & Physiology",
    difficulty: 'Easy'
  }
];

// Replace placeholder questions with real ones for anatomy & physiology
if (testQuestionsByCategory['anatomy-physiology']) {
  testQuestionsByCategory['anatomy-physiology'] = anatomyPhysiologyQuestions;
}

// Example questions for Grand Test 1
const grandTest1Questions: TestQuestion[] = [
  {
    id: 30001,
    question: "What is the normal range for adult heart rate at rest?",
    options: [
      "60-100 beats per minute",
      "50-90 beats per minute",
      "70-110 beats per minute",
      "80-120 beats per minute"
    ],
    correctAnswer: 0,
    explanation: "The normal resting heart rate for adults is 60-100 beats per minute. Athletes may have lower rates due to better cardiovascular conditioning.",
    category: "Grand Test",
    difficulty: 'Hard'
  },
  {
    id: 30002,
    question: "Which of the following is the most common cause of nosocomial infections?",
    options: [
      "Poor hand hygiene",
      "Contaminated medical equipment",
      "Airborne pathogens",
      "Patient's own flora"
    ],
    correctAnswer: 0,
    explanation: "Poor hand hygiene is the leading cause of healthcare-associated infections. Proper handwashing can prevent up to 50% of nosocomial infections.",
    category: "Grand Test",
    difficulty: 'Hard'
  },
  {
    id: 30003,
    question: "What is the first-line treatment for anaphylactic shock?",
    options: [
      "Corticosteroids",
      "Epinephrine (Adrenaline)",
      "Antihistamines",
      "Bronchodilators"
    ],
    correctAnswer: 1,
    explanation: "Epinephrine is the first-line treatment for anaphylaxis. It should be administered immediately via intramuscular injection, typically in the anterolateral thigh.",
    category: "Grand Test",
    difficulty: 'Hard'
  },
  {
    id: 30004,
    question: "Which position is most appropriate for a patient with acute respiratory distress?",
    options: [
      "Supine position",
      "Trendelenburg position",
      "High Fowler's position",
      "Left lateral position"
    ],
    correctAnswer: 2,
    explanation: "High Fowler's position (sitting upright at 60-90 degrees) facilitates maximum lung expansion and eases breathing for patients with respiratory distress.",
    category: "Grand Test",
    difficulty: 'Hard'
  },
  {
    id: 30005,
    question: "What is the therapeutic range for digoxin in adults?",
    options: [
      "0.5-2.0 ng/mL",
      "1.0-2.0 ng/mL",
      "0.8-2.0 ng/mL",
      "1.2-2.4 ng/mL"
    ],
    correctAnswer: 2,
    explanation: "The therapeutic range for digoxin is 0.8-2.0 ng/mL. Levels above 2.0 ng/mL increase the risk of digoxin toxicity.",
    category: "Grand Test",
    difficulty: 'Hard'
  }
];

// Replace placeholder questions with real ones for Grand Test 1
if (testQuestionsByCategory['grand-test-1']) {
  testQuestionsByCategory['grand-test-1'] = grandTest1Questions;
}

// Get all test questions as a flat array
export const getAllTestQuestions = (): TestQuestion[] => {
  return Object.values(testQuestionsByCategory).flat();
};

// Get questions by category ID
export const getQuestionsByCategory = (categoryId: string): TestQuestion[] => {
  return testQuestionsByCategory[categoryId] || [];
};

// Get total question count
export const getTotalQuestionCount = (): number => {
  return getAllTestQuestions().length;
};

// Get categories with question counts
export const getCategoriesWithQuestionCounts = (): Array<{categoryId: string, questionCount: number}> => {
  return Object.entries(testQuestionsByCategory).map(([categoryId, questions]) => ({
    categoryId,
    questionCount: questions.length
  }));
};

// Debug function to log all generated categories
export const debugLogCategories = () => {
  console.log('Generated question categories:');
  Object.keys(testQuestionsByCategory).forEach(categoryId => {
    const questionCount = testQuestionsByCategory[categoryId].length;
    console.log(`- ${categoryId}: ${questionCount} questions`);
  });
  console.log(`Total categories: ${Object.keys(testQuestionsByCategory).length}`);
  console.log(`Total questions: ${getTotalQuestionCount()}`);
};
// Helper function to update questions for a specific subcategory
export const updateSubcategoryQuestions = (subcategoryId: string, questions: TestQuestion[]) => {
  if (testQuestionsByCategory[subcategoryId]) {
    testQuestionsByCategory[subcategoryId] = questions;
    console.log(`Updated ${questions.length} questions for subcategory: ${subcategoryId}`);
  } else {
    console.warn(`Subcategory ${subcategoryId} not found`);
  }
};

// Helper function to add questions to existing subcategory questions
export const addQuestionsToSubcategory = (subcategoryId: string, newQuestions: TestQuestion[]) => {
  if (testQuestionsByCategory[subcategoryId]) {
    testQuestionsByCategory[subcategoryId] = [...testQuestionsByCategory[subcategoryId], ...newQuestions];
    console.log(`Added ${newQuestions.length} questions to subcategory: ${subcategoryId}`);
  } else {
    console.warn(`Subcategory ${subcategoryId} not found`);
  }
};

// Helper function to get all available subcategory IDs
export const getAllSubcategoryIds = (): string[] => {
  return Object.keys(testQuestionsByCategory);
};

// Helper function to create a template question
export const createQuestionTemplate = (
  id: number,
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  category: string,
  difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium'
): TestQuestion => {
  return {
    id,
    question,
    options,
    correctAnswer,
    explanation,
    category,
    difficulty
  };
};

// Example usage and templates for each main category
export const questionTemplates = {
  // Grand Test Questions Template
  grandTest: (testNumber: number, questionNumber: number): TestQuestion => ({
    id: 30000 + (testNumber * 100) + questionNumber,
    question: `Grand Test ${testNumber} - Question ${questionNumber}: [Your question here]`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Your detailed explanation here",
    category: "Grand Test",
    difficulty: 'Hard'
  }),

  // HYT Questions Template  
  hyt: (testNumber: number, questionNumber: number): TestQuestion => ({
    id: 31000 + (testNumber * 100) + questionNumber,
    question: `HYT Test ${testNumber} - Question ${questionNumber}: [Your question here]`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Your detailed explanation here",
    category: "HYT",
    difficulty: 'Medium'
  }),

  // MCQ Questions Template
  mcq: (setNumber: number, questionNumber: number): TestQuestion => ({
    id: 32000 + (setNumber * 100) + questionNumber,
    question: `MCQ Set ${setNumber} - Question ${questionNumber}: [Your question here]`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Your detailed explanation here",
    category: "MCQ",
    difficulty: 'Medium'
  })
};

// Batch update function for multiple subcategories
export const batchUpdateQuestions = (updates: Record<string, TestQuestion[]>) => {
  Object.entries(updates).forEach(([subcategoryId, questions]) => {
    updateSubcategoryQuestions(subcategoryId, questions);
  });
};
