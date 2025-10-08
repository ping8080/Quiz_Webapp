import { TestQuestion } from '../types/test';
import { testCategories } from './testCategories';
import { mcq2RealQuestions } from './mcq2';


// Real questions for MCQ-2 (Drug Calculation)
const mcq2RealQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "A 58 years old female patient has superficial partial-thickness burns to the anterior head and neck, front and back of the left arm, front of the right arm, posterior trunk, front and back of the right leg, and back of the left leg. Using the Rule of Nines, calculate the total body surface area percentage that is burned?",
    options: [
      "45%",
      "54%", 
      "63%",
      "72%"
    ],
    correctAnswer: 1,
    explanation: "Using Rule of Nines: Head/neck (9%) + Left arm front/back (9%) + Right arm front (4.5%) + Posterior trunk (18%) + Right leg front/back (18%) + Left leg back (9%) = 54%",
    category: "MCQ",
    difficulty: 'Medium'
  },
  {
    id: 2,
    question: "You are providing discharge education to a patient who is scheduled to take magnesium hydroxide/aluminum hydroxide (Maalox) 30 mL PO daily at home. How will you instruct the patient to measure the dose using ordinary household measuring devices?",
    options: [
      "2 tablespoons",
      "6 teaspoons", 
      "1 fluid ounce",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "30 mL equals 2 tablespoons, 6 teaspoons, or 1 fluid ounce. All conversions are correct.",
    category: "MCQ",
    difficulty: 'Medium'
  },
  {
    id: 3,
    question: "After the clinical round the attending doctor order administered 800 units of Heparin. The assigned nurse has indent the doctor order's and received 5000 units/5ml of Heparin from hospital pharmacy. What volume is needed to give 800 units?",
    options: [
      "0.8 mL",
      "1.6 mL", 
      "0.16 mL",
      "8 mL"
    ],
    correctAnswer: 0,
    explanation: "Using formula: (Desired dose/Stock strength) × Volume = (800 units/5000 units) × 5 mL = 0.8 mL",
    category: "MCQ",
    difficulty: 'Medium'
  },
  {
   id: 4,
    question: "The subcutaneous layer (also called the hypodermis) is the deepest layer of the skin, located beneath the dermis. It primarily consists of adipose tissue (fat cells) and areolar connective tissue. The adipose tissue in this layer serves several functions?",
    "options": [
      "Insulation: It helps to insulate the body and maintain body temperature",
      "Cushioning: It acts as a cushion to protect underlying muscles and organs from physical shock",
      "Energy storage: It stores energy in the form of fat, which the body can use when needed"
    ],
    "explanation": "The selected answer is supported by evidence and expert consensus.",
    "category": "MCQ",
    "difficulty": "Easy",
    "correctAnswer": 0
  },
  // Add more real questions here...
];

// Generate questions for all categories and subcategories
export const testQuestionsByCategory: Record<string, TestQuestion[]> = {};

testCategories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    const questions: TestQuestion[] = [];
    
    // Use real questions for MCQ-2 if available
    if (subcategory.id === 'mcq-2' && mcq2RealQuestions.length > 0) {
      // Use real questions for MCQ-2
      testQuestionsByCategory[subcategory.id] = mcq2RealQuestions.map(q => ({
        ...q,
        category: category.name
      }));
      return;
    }
    
    for (let i = 0; i < subcategory.totalQuestions; i++) {
      questions.push({
        id: i + 1,
        question: `Sample question ${i + 1} for ${subcategory.name}`,
        options: [
          "Option A",
          "Option B", 
          "Option C",
          "Option D"
        ],
        correctAnswer: Math.floor(Math.random() * 4),
        explanation: `This is the explanation for question ${i + 1} in ${subcategory.name}.`,
        category: category.name,
        difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)] as 'Easy' | 'Medium' | 'Hard'
      });
    }
    
    testQuestionsByCategory[subcategory.id] = questions;
  });
});

export const getAllTestQuestions = (): TestQuestion[] => {
  const allQuestions: TestQuestion[] = [];
  Object.values(testQuestionsByCategory).forEach(questions => {
    allQuestions.push(...questions);
  });
  return allQuestions;
};
