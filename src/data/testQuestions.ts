import { TestQuestion } from '../types/test';
import { testCategories } from './testCategories';

// Comprehensive question bank for all nursing topics
const nursingQuestionBank = {
  // Anatomy & Physiology Questions
  anatomy: [
    {
      question: "Which chamber of the heart receives oxygenated blood from the lungs?",
      options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
      correctAnswer: 2,
      explanation: "The left atrium receives oxygenated blood from the pulmonary veins returning from the lungs."
    },
    {
      question: "What is the normal range for adult respiratory rate?",
      options: ["8-12 breaths per minute", "12-20 breaths per minute", "20-30 breaths per minute", "30-40 breaths per minute"],
      correctAnswer: 1,
      explanation: "The normal respiratory rate for adults is 12-20 breaths per minute at rest."
    },
    {
      question: "Which hormone regulates blood glucose levels?",
      options: ["Thyroxine", "Insulin", "Cortisol", "Adrenaline"],
      correctAnswer: 1,
      explanation: "Insulin, produced by the pancreas, regulates blood glucose levels by facilitating glucose uptake by cells."
    }
  ],

  // Pharmacology Questions
  pharmacology: [
    {
      question: "What is the therapeutic range for digoxin in adults?",
      options: ["0.5-2.0 ng/mL", "1.0-2.0 ng/mL", "0.8-2.0 ng/mL", "1.2-2.4 ng/mL"],
      correctAnswer: 2,
      explanation: "The therapeutic range for digoxin is 0.8-2.0 ng/mL. Levels above 2.0 ng/mL increase the risk of digoxin toxicity."
    },
    {
      question: "Which medication is the first-line treatment for anaphylactic shock?",
      options: ["Corticosteroids", "Epinephrine", "Antihistamines", "Bronchodilators"],
      correctAnswer: 1,
      explanation: "Epinephrine is the first-line treatment for anaphylaxis and should be administered immediately via intramuscular injection."
    },
    {
      question: "What is the antidote for warfarin overdose?",
      options: ["Protamine sulfate", "Vitamin K", "Naloxone", "Flumazenil"],
      correctAnswer: 1,
      explanation: "Vitamin K is the antidote for warfarin overdose as it helps restore clotting factor synthesis."
    }
  ],

  // Medical-Surgical Questions
  medicalSurgical: [
    {
      question: "Which position is most appropriate for a patient with acute respiratory distress?",
      options: ["Supine position", "Trendelenburg position", "High Fowler's position", "Left lateral position"],
      correctAnswer: 2,
      explanation: "High Fowler's position (sitting upright at 60-90 degrees) facilitates maximum lung expansion and eases breathing."
    },
    {
      question: "What is the most common cause of nosocomial infections?",
      options: ["Poor hand hygiene", "Contaminated medical equipment", "Airborne pathogens", "Patient's own flora"],
      correctAnswer: 0,
      explanation: "Poor hand hygiene is the leading cause of healthcare-associated infections and can prevent up to 50% of nosocomial infections."
    },
    {
      question: "Which assessment finding indicates compartment syndrome?",
      options: ["Decreased pulse", "Severe pain with passive movement", "Skin discoloration", "Numbness and tingling"],
      correctAnswer: 1,
      explanation: "Severe pain with passive movement is the earliest and most reliable sign of compartment syndrome."
    }
  ],

  // Pediatric Nursing Questions
  pediatric: [
    {
      question: "At what age should solid foods be introduced to infants?",
      options: ["2-3 months", "4-6 months", "6-8 months", "8-10 months"],
      correctAnswer: 1,
      explanation: "Solid foods should be introduced between 4-6 months of age when the infant shows signs of readiness."
    },
    {
      question: "What is the normal heart rate range for a newborn?",
      options: ["80-120 bpm", "100-160 bpm", "120-180 bpm", "140-200 bpm"],
      correctAnswer: 2,
      explanation: "Normal heart rate for newborns is 120-180 beats per minute, which is higher than adult rates."
    },
    {
      question: "Which vaccine is contraindicated in immunocompromised children?",
      options: ["DTaP", "IPV", "MMR", "Hib"],
      correctAnswer: 2,
      explanation: "MMR is a live vaccine and is contraindicated in immunocompromised children due to risk of infection."
    }
  ],

  // Obstetric & Gynecological Questions
  obstetric: [
    {
      question: "What is the normal duration of the first stage of labor for primigravida?",
      options: ["6-8 hours", "8-12 hours", "12-20 hours", "20-24 hours"],
      correctAnswer: 2,
      explanation: "The first stage of labor typically lasts 12-20 hours for first-time mothers (primigravida)."
    },
    {
      question: "Which hormone is responsible for milk ejection reflex?",
      options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
      correctAnswer: 1,
      explanation: "Oxytocin triggers the milk ejection (let-down) reflex, while prolactin stimulates milk production."
    },
    {
      question: "What is the recommended weight gain during pregnancy for normal BMI women?",
      options: ["15-20 lbs", "25-35 lbs", "35-45 lbs", "45-55 lbs"],
      correctAnswer: 1,
      explanation: "Women with normal BMI (18.5-24.9) should gain 25-35 pounds during pregnancy."
    }
  ],

  // Psychiatric Nursing Questions
  psychiatric: [
    {
      question: "Which therapeutic communication technique involves restating the patient's message?",
      options: ["Reflection", "Clarification", "Paraphrasing", "Summarizing"],
      correctAnswer: 2,
      explanation: "Paraphrasing involves restating the patient's message in your own words to ensure understanding."
    },
    {
      question: "What is the priority intervention for a patient experiencing hallucinations?",
      options: ["Argue with the patient", "Ignore the hallucinations", "Assess for safety risks", "Medicate immediately"],
      correctAnswer: 2,
      explanation: "The priority is to assess for safety risks to the patient and others when hallucinations are present."
    },
    {
      question: "Which medication class is first-line treatment for major depression?",
      options: ["Tricyclic antidepressants", "MAO inhibitors", "SSRIs", "Benzodiazepines"],
      correctAnswer: 2,
      explanation: "SSRIs (Selective Serotonin Reuptake Inhibitors) are first-line treatment due to their safety profile."
    }
  ],

  // Community Health Questions
  community: [
    {
      question: "What is the primary focus of primary prevention?",
      options: ["Early detection", "Treatment of disease", "Prevention of disease occurrence", "Rehabilitation"],
      correctAnswer: 2,
      explanation: "Primary prevention focuses on preventing disease occurrence through health promotion and risk reduction."
    },
    {
      question: "Which immunization schedule is recommended for adults?",
      options: ["Annual flu vaccine only", "Tdap every 10 years", "MMR every 5 years", "No vaccines needed"],
      correctAnswer: 1,
      explanation: "Adults should receive Tdap (tetanus, diphtheria, pertussis) booster every 10 years."
    },
    {
      question: "What is the most effective method for preventing disease transmission?",
      options: ["Isolation", "Hand hygiene", "Mask wearing", "Vaccination"],
      correctAnswer: 1,
      explanation: "Hand hygiene is the single most effective method for preventing disease transmission."
    }
  ],

  // Nursing Fundamentals Questions
  fundamentals: [
    {
      question: "What is the primary goal of nursing care?",
      options: ["To cure diseases", "To promote health and prevent illness", "To assist doctors", "To manage hospital operations"],
      correctAnswer: 1,
      explanation: "The primary goal of nursing is to promote health, prevent illness, and help patients achieve optimal health outcomes."
    },
    {
      question: "Which of the following is NOT one of the four fundamental nursing responsibilities?",
      options: ["Promote health", "Prevent illness", "Restore health", "Prescribe medications"],
      correctAnswer: 3,
      explanation: "Prescribing medications is typically a physician's responsibility, not a fundamental nursing responsibility."
    },
    {
      question: "What does the acronym ADPIE stand for in the nursing process?",
      options: ["Assess, Diagnose, Plan, Implement, Evaluate", "Analyze, Develop, Perform, Inspect, Execute", "Admit, Discharge, Plan, Intervene, Examine", "Assess, Document, Prepare, Implement, Educate"],
      correctAnswer: 0,
      explanation: "ADPIE represents the five steps of the nursing process: Assessment, Diagnosis, Planning, Implementation, and Evaluation."
    }
  ],

  // Critical Care Questions
  criticalCare: [
    {
      question: "What is the normal central venous pressure (CVP) range?",
      options: ["0-4 mmHg", "2-8 mmHg", "8-12 mmHg", "12-16 mmHg"],
      correctAnswer: 1,
      explanation: "Normal CVP range is 2-8 mmHg, indicating adequate venous return and right heart function."
    },
    {
      question: "Which arrhythmia is most life-threatening and requires immediate defibrillation?",
      options: ["Atrial fibrillation", "Ventricular tachycardia", "Ventricular fibrillation", "Heart block"],
      correctAnswer: 2,
      explanation: "Ventricular fibrillation is immediately life-threatening and requires immediate defibrillation."
    },
    {
      question: "What is the target oxygen saturation for COPD patients?",
      options: ["95-100%", "88-92%", "85-88%", "80-85%"],
      correctAnswer: 1,
      explanation: "COPD patients should maintain oxygen saturation of 88-92% to avoid suppressing respiratory drive."
    }
  ],

  // Infection Control Questions
  infectionControl: [
    {
      question: "How long should alcohol-based hand sanitizer be rubbed on hands?",
      options: ["5-10 seconds", "15-20 seconds", "30-45 seconds", "60 seconds"],
      correctAnswer: 1,
      explanation: "Alcohol-based hand sanitizer should be rubbed on hands for 15-20 seconds until dry."
    },
    {
      question: "Which precaution is required for patients with tuberculosis?",
      options: ["Contact precautions", "Droplet precautions", "Airborne precautions", "Standard precautions only"],
      correctAnswer: 2,
      explanation: "Tuberculosis requires airborne precautions due to transmission via airborne droplet nuclei."
    },
    {
      question: "What is the minimum time for surgical hand scrub?",
      options: ["1 minute", "2-3 minutes", "5 minutes", "10 minutes"],
      correctAnswer: 1,
      explanation: "Surgical hand scrub should be performed for a minimum of 2-3 minutes to ensure sterility."
    }
  ],

  // Emergency Nursing Questions
  emergency: [
    {
      question: "What is the first priority in emergency assessment?",
      options: ["Pain assessment", "Airway assessment", "Blood pressure check", "Temperature measurement"],
      correctAnswer: 1,
      explanation: "Airway assessment is the first priority following the ABC (Airway, Breathing, Circulation) approach."
    },
    {
      question: "Which medication is used for cardiac arrest due to ventricular fibrillation?",
      options: ["Atropine", "Epinephrine", "Lidocaine", "Amiodarone"],
      correctAnswer: 1,
      explanation: "Epinephrine is the first-line medication for cardiac arrest, including ventricular fibrillation."
    },
    {
      question: "What is the compression-to-ventilation ratio for adult CPR?",
      options: ["15:2", "30:2", "5:1", "10:2"],
      correctAnswer: 1,
      explanation: "The compression-to-ventilation ratio for adult CPR is 30:2 for both single and two-rescuer CPR."
    }
  ]
};

// Function to get random questions from a topic
function getRandomQuestions(topic: any[], count: number, startId: number, category: string, difficulty: 'Easy' | 'Medium' | 'Hard'): TestQuestion[] {
  const questions: TestQuestion[] = [];
  
  for (let i = 0; i < count; i++) {
    const questionIndex = i % topic.length;
    const baseQuestion = topic[questionIndex];
    
    questions.push({
      id: startId + i,
      question: `${baseQuestion.question}`,
      options: baseQuestion.options,
      correctAnswer: baseQuestion.correctAnswer,
      explanation: baseQuestion.explanation,
      category: category,
      difficulty: difficulty
    });
  }
  
  return questions;
}

// Function to mix questions from multiple topics
function getMixedQuestions(count: number, startId: number, category: string, difficulty: 'Easy' | 'Medium' | 'Hard'): TestQuestion[] {
  const allTopics = Object.values(nursingQuestionBank).flat();
  const questions: TestQuestion[] = [];
  
  for (let i = 0; i < count; i++) {
    const questionIndex = i % allTopics.length;
    const baseQuestion = allTopics[questionIndex];
    
    questions.push({
      id: startId + i,
      question: `${baseQuestion.question}`,
      options: baseQuestion.options,
      correctAnswer: baseQuestion.correctAnswer,
      explanation: baseQuestion.explanation,
      category: category,
      difficulty: difficulty
    });
  }
  
  return questions;
}

// Generate questions for all categories and subcategories
const generateAllTestQuestions = (): Record<string, TestQuestion[]> => {
  const allQuestions: Record<string, TestQuestion[]> = {};
  let questionIdCounter = 10000;

  testCategories.forEach((category) => {
    if (category.subcategories && category.subcategories.length > 0) {
      // Category has subcategories
      category.subcategories.forEach((subcategory, subIndex) => {
        const questionCount = Math.min(subcategory.totalQuestions || 25, 50);
        let questions: TestQuestion[] = [];

        // Assign specific question types based on category
        switch (category.id) {
          case 'grand-test':
            questions = getMixedQuestions(questionCount, questionIdCounter, 'Grand Test', 'Hard');
            break;
          
          case 'hyt':
            questions = getRandomQuestions(
              [...nursingQuestionBank.criticalCare, ...nursingQuestionBank.emergency],
              questionCount, questionIdCounter, 'HYT', 'Medium'
            );
            break;
          
          case 'mcq':
            const topicIndex = subIndex % Object.keys(nursingQuestionBank).length;
            const topicKey = Object.keys(nursingQuestionBank)[topicIndex];
            questions = getRandomQuestions(
              nursingQuestionBank[topicKey as keyof typeof nursingQuestionBank],
              questionCount, questionIdCounter, 'MCQ', 'Medium'
            );
            break;
          
          case 'nst':
            questions = getRandomQuestions(
              nursingQuestionBank.fundamentals,
              questionCount, questionIdCounter, 'NST', 'Medium'
            );
            break;
          
          case 'nsat':
            questions = getMixedQuestions(questionCount, questionIdCounter, 'NSAT', 'Hard');
            break;
          
          case 'nnt':
            questions = getMixedQuestions(questionCount, questionIdCounter, 'NNT', subIndex < 5 ? 'Medium' : 'Hard');
            break;
          
          case 'nursing-educath':
            questions = getRandomQuestions(
              nursingQuestionBank.fundamentals,
              questionCount, questionIdCounter, 'Nursing Educath', 'Medium'
            );
            break;
          
          case 'special-test':
            questions = getRandomQuestions(
              [...nursingQuestionBank.criticalCare, ...nursingQuestionBank.pharmacology],
              questionCount, questionIdCounter, 'Special Test', 'Hard'
            );
            break;
          
          case 'sat':
            questions = getRandomQuestions(
              nursingQuestionBank.medicalSurgical,
              questionCount, questionIdCounter, 'SAT', 'Medium'
            );
            break;
          
          case 'super-15':
            questions = getMixedQuestions(questionCount, questionIdCounter, 'Super 15', 'Hard');
            break;
          
          case 'super-30':
            questions = getMixedQuestions(questionCount, questionIdCounter, 'Super 30', 'Hard');
            break;
          
          case 'super-50':
            questions = getMixedQuestions(questionCount, questionIdCounter, 'Super 50', 'Hard');
            break;
          
          default:
            questions = getMixedQuestions(questionCount, questionIdCounter, category.name, 'Medium');
        }

        allQuestions[subcategory.id] = questions;
        questionIdCounter += questionCount;
      });
    } else {
      // Direct category without subcategories
      const questionCount = Math.min(category.totalQuestions || 25, 50);
      let questions: TestQuestion[] = [];

      switch (category.id) {
        case 'norcet-2021':
          questions = getMixedQuestions(questionCount, questionIdCounter, 'NORCET 2021', 'Medium');
          break;
        
        case 'anatomy-physiology':
          questions = getRandomQuestions(
            nursingQuestionBank.anatomy,
            questionCount, questionIdCounter, 'Anatomy & Physiology', 'Hard'
          );
          break;
        
        case 'pharmacology':
          questions = getRandomQuestions(
            nursingQuestionBank.pharmacology,
            questionCount, questionIdCounter, 'Pharmacology', 'Hard'
          );
          break;
        
        case 'medical-surgical':
          questions = getRandomQuestions(
            nursingQuestionBank.medicalSurgical,
            questionCount, questionIdCounter, 'Medical-Surgical Nursing', 'Medium'
          );
          break;
        
        case 'community-health':
          questions = getRandomQuestions(
            nursingQuestionBank.community,
            questionCount, questionIdCounter, 'Community Health Nursing', 'Medium'
          );
          break;
        
        case 'pediatric-nursing':
          questions = getRandomQuestions(
            nursingQuestionBank.pediatric,
            questionCount, questionIdCounter, 'Pediatric Nursing', 'Medium'
          );
          break;
        
        case 'obstetric-gynecology':
          questions = getRandomQuestions(
            nursingQuestionBank.obstetric,
            questionCount, questionIdCounter, 'Obstetric & Gynecological Nursing', 'Medium'
          );
          break;
        
        case 'psychiatric-nursing':
          questions = getRandomQuestions(
            nursingQuestionBank.psychiatric,
            questionCount, questionIdCounter, 'Psychiatric Nursing', 'Medium'
          );
          break;
        
        case 'nursing-fundamentals':
          questions = getRandomQuestions(
            nursingQuestionBank.fundamentals,
            questionCount, questionIdCounter, 'Nursing Fundamentals', 'Easy'
          );
          break;
        
        case 'infection-control':
          questions = getRandomQuestions(
            nursingQuestionBank.infectionControl,
            questionCount, questionIdCounter, 'Infection Control', 'Medium'
          );
          break;
        
        default:
          questions = getMixedQuestions(questionCount, questionIdCounter, category.name, 'Medium');
      }

      allQuestions[category.id] = questions;
      questionIdCounter += questionCount;
    }
  });

  return allQuestions;
};

// Generate all test questions
export const testQuestionsByCategory = generateAllTestQuestions();

// Export utility functions
export const getAllTestQuestions = (): TestQuestion[] => {
  return Object.values(testQuestionsByCategory).flat();
};

export const getQuestionsByCategory = (categoryId: string): TestQuestion[] => {
  return testQuestionsByCategory[categoryId] || [];
};

export const getTotalQuestionCount = (): number => {
  return getAllTestQuestions().length;
};

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

// Helper functions for updating questions
export const updateSubcategoryQuestions = (subcategoryId: string, questions: TestQuestion[]) => {
  if (testQuestionsByCategory[subcategoryId]) {
    testQuestionsByCategory[subcategoryId] = questions;
    console.log(`Updated ${questions.length} questions for subcategory: ${subcategoryId}`);
  } else {
    console.warn(`Subcategory ${subcategoryId} not found`);
  }
};

export const addQuestionsToSubcategory = (subcategoryId: string, newQuestions: TestQuestion[]) => {
  if (testQuestionsByCategory[subcategoryId]) {
    testQuestionsByCategory[subcategoryId] = [...testQuestionsByCategory[subcategoryId], ...newQuestions];
    console.log(`Added ${newQuestions.length} questions to subcategory: ${subcategoryId}`);
  } else {
    console.warn(`Subcategory ${subcategoryId} not found`);
  }
};

export const getAllSubcategoryIds = (): string[] => {
  return Object.keys(testQuestionsByCategory);
};

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

// Batch update function for multiple subcategories
export const batchUpdateQuestions = (updates: Record<string, TestQuestion[]>) => {
  Object.entries(updates).forEach(([subcategoryId, questions]) => {
    updateSubcategoryQuestions(subcategoryId, questions);
  });
};
