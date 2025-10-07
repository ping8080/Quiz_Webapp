import { TestQuestion } from '../types/test';

// Sample questions for GrandTest subcategorie 1
export const testQuestionsByCategory: Record<string, TestQuestion[]> = {
  'Grand-test-1': [
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
