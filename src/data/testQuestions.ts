import { TestQuestion } from '../types/test';

// Sample questions for different subcategories
export const testQuestionsByCategory: Record<string, TestQuestion[]> = {
  'nursing-fundamentals': [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
  ],
  'anatomy-physiology': [
    {
      id: 4,
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
      id: 5,
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
  ],
  'pharmacology': [
    {
      id: 6,
      question: "What does the term 'half-life' mean in pharmacology?",
      options: [
        "The time it takes for a drug to start working",
        "The time it takes for half the drug to be eliminated from the body",
        "The duration of drug action",
        "The time between doses"
      ],
      correctAnswer: 1,
      explanation: "Half-life is the time required for the concentration of a drug in the body to decrease by half.",
      category: "Pharmacology",
      difficulty: 'Medium'
    }
  ],
  'medical-surgical': [
    {
      id: 7,
      question: "What is the most common postoperative complication?",
      options: [
        "Infection",
        "Bleeding",
        "Pain",
        "Nausea and vomiting"
      ],
      correctAnswer: 2,
      explanation: "Pain is the most common postoperative complication that affects nearly all surgical patients.",
      category: "Medical-Surgical Nursing",
      difficulty: 'Easy'
    }
  ],
  'community-health': [
    {
      id: 8,
      question: "What is the primary focus of community health nursing?",
      options: [
        "Individual patient care",
        "Hospital management",
        "Population health and disease prevention",
        "Emergency care"
      ],
      correctAnswer: 2,
      explanation: "Community health nursing focuses on the health of populations and communities, emphasizing disease prevention and health promotion.",
      category: "Community Health Nursing",
      difficulty: 'Medium'
    }
  ],
  'pediatric-nursing': [
    {
      id: 9,
      question: "At what age do children typically begin to walk independently?",
      options: [
        "8-10 months",
        "10-12 months",
        "12-15 months",
        "15-18 months"
      ],
      correctAnswer: 2,
      explanation: "Most children begin walking independently between 12-15 months of age, though there is normal variation.",
      category: "Pediatric Nursing",
      difficulty: 'Easy'
    }
  ],
  'obstetric-gynecology': [
    {
      id: 10,
      question: "What is the normal duration of pregnancy?",
      options: [
        "38 weeks",
        "40 weeks",
        "42 weeks",
        "44 weeks"
      ],
      correctAnswer: 1,
      explanation: "Normal pregnancy duration is approximately 40 weeks from the last menstrual period.",
      category: "Obstetric & Gynecological Nursing",
      difficulty: 'Easy'
    }
  ],
  'psychiatric-nursing': [
    {
      id: 11,
      question: "What is the therapeutic communication technique of restating the patient's message in your own words?",
      options: [
        "Reflection",
        "Paraphrasing",
        "Clarification",
        "Summarizing"
      ],
      correctAnswer: 1,
      explanation: "Paraphrasing involves restating the patient's message in your own words to ensure understanding.",
      category: "Psychiatric Nursing",
      difficulty: 'Medium'
    }
  ],
  'infection-control': [
    {
      id: 12,
      question: "Which type of isolation precaution is used for patients with tuberculosis?",
      options: [
        "Contact precautions",
        "Droplet precautions",
        "Airborne precautions",
        "Standard precautions only"
      ],
      correctAnswer: 2,
      explanation: "Tuberculosis requires airborne precautions due to its transmission through airborne droplet nuclei.",
      category: "Infection Control",
      difficulty: 'Medium'
    }
  ]
};

// Add more questions for other categories as needed
export const getAllTestQuestions = (): TestQuestion[] => {
  return Object.values(testQuestionsByCategory).flat();
};

import { TestQuestion } from '../types/test';
import { testCategories } from './testCategories';

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
