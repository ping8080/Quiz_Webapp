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
];

// Real questions for MCQ Set 1   
const mcqSet1Questions: TestQuestion[] = [
{
  id: '1',
  question: 'Which part of the brain controls balance and coordination of voluntary muscle movements?',
  options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Pons'],
  correctAnswer: 1,
  explanation: 'The cerebellum lies posterior to the brainstem and coordinates voluntary muscle movements, posture, and balance. Damage to the cerebellum causes loss of coordination (ataxia). Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '2',
  question: 'Which of the following organs is responsible for the secretion of bile?',
  options: ['Liver', 'Gall bladder', 'Pancreas', 'Stomach'],
  correctAnswer: 0,
  explanation: 'The liver secretes bile that helps in emulsification and absorption of fats. The gall bladder stores and concentrates bile but does not produce it. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '3',
  question: 'The functional unit of the kidney is called:',
  options: ['Nephron', 'Neuron', 'Glomerulus', 'Tubule'],
  correctAnswer: 0,
  explanation: 'Each kidney contains about one million nephrons that filter blood, reabsorb required substances, and excrete wastes as urine. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '4',
  question: 'Which blood cells are responsible for antibody production?',
  options: ['T-lymphocytes', 'B-lymphocytes', 'Neutrophils', 'Monocytes'],
  correctAnswer: 1,
  explanation: 'B-lymphocytes mature into plasma cells that produce antibodies. T-lymphocytes mediate cellular immunity, and neutrophils or monocytes act as phagocytes. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '5',
  question: 'Which of the following is the natural pacemaker of the heart?',
  options: ['Atrioventricular node', 'Sinoatrial node', 'Bundle of His', 'Purkinje fibres'],
  correctAnswer: 1,
  explanation: 'The sinoatrial (SA) node, located in the right atrium, initiates the electrical impulse that determines heart rate and rhythm; hence it is called the natural pacemaker. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '6',
  question: 'Which hormone increases blood calcium levels?',
  options: ['Calcitonin', 'Parathyroid hormone', 'Insulin', 'Thyroxine'],
  correctAnswer: 1,
  explanation: 'Parathyroid hormone (PTH) secreted by parathyroid glands increases blood calcium by promoting bone resorption and decreasing renal calcium excretion. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '7',
  question: 'Which vitamin is essential for normal vision?',
  options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
  correctAnswer: 0,
  explanation: 'Vitamin A (retinol) is required for the synthesis of rhodopsin in retinal cells; its deficiency causes night blindness. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '8',
  question: 'Which of the following organs produces insulin?',
  options: ['Liver', 'Pancreas', 'Gall bladder', 'Stomach'],
  correctAnswer: 1,
  explanation: 'The β-cells of the islets of Langerhans in the pancreas secrete insulin, which regulates blood glucose levels. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '9',
  question: 'Which part of the eye regulates the amount of light entering it?',
  options: ['Lens', 'Cornea', 'Iris', 'Retina'],
  correctAnswer: 2,
  explanation: 'The iris controls the diameter of the pupil and thus regulates the amount of light entering the eyeball. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '10',
  question: 'Which of the following is the site for gaseous exchange in the lungs?',
  options: ['Bronchi', 'Bronchioles', 'Alveoli', 'Trachea'],
  correctAnswer: 2,
  explanation: 'Alveoli are microscopic air sacs where oxygen diffuses into blood and carbon dioxide diffuses out through the thin alveolar–capillary membrane. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '11',
  question: 'Which part of the brain regulates body temperature, hunger, and thirst?',
  options: ['Cerebrum', 'Cerebellum', 'Hypothalamus', 'Medulla oblongata'],
  correctAnswer: 2,
  explanation: 'The hypothalamus is the main centre for autonomic and endocrine regulation. It maintains homeostasis by controlling temperature, appetite, thirst, and hormonal secretion through the pituitary gland. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '12',
  question: 'Which of the following is a fat-soluble vitamin?',
  options: ['Vitamin B12', 'Vitamin C', 'Vitamin D', 'Vitamin B6'],
  correctAnswer: 2,
  explanation: 'Vitamins A, D, E, and K are fat-soluble and stored in the liver and fatty tissues. Vitamin D regulates calcium absorption. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '13',
  question: 'Deficiency of Vitamin C leads to which disease?',
  options: ['Rickets', 'Scurvy', 'Pellagra', 'Beriberi'],
  correctAnswer: 1,
  explanation: 'Vitamin C deficiency causes scurvy, characterized by bleeding gums, poor wound healing, and anemia due to defective collagen synthesis. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '14',
  question: 'Which enzyme in saliva helps in the digestion of starch?',
  options: ['Pepsin', 'Amylase', 'Lipase', 'Trypsin'],
  correctAnswer: 1,
  explanation: 'Salivary amylase (ptyalin) breaks down starch into maltose in the mouth. Pepsin acts on proteins in the stomach. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '15',
  question: 'Which of the following blood vessels carries oxygenated blood from lungs to the heart?',
  options: ['Pulmonary vein', 'Pulmonary artery', 'Aorta', 'Superior vena cava'],
  correctAnswer: 0,
  explanation: 'The pulmonary vein carries oxygenated blood from the lungs to the left atrium, whereas the pulmonary artery carries deoxygenated blood from the heart to the lungs. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '16',
  question: 'The hormone responsible for milk production is:',
  options: ['Oxytocin', 'Prolactin', 'Progesterone', 'Estrogen'],
  correctAnswer: 1,
  explanation: 'Prolactin, secreted by the anterior pituitary, stimulates milk secretion after childbirth. Oxytocin helps in milk ejection. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '17',
  question: 'Which part of the ear is responsible for maintaining body balance?',
  options: ['Cochlea', 'Semicircular canals', 'Eustachian tube', 'Tympanic membrane'],
  correctAnswer: 1,
  explanation: 'The semicircular canals of the inner ear detect angular movements and help maintain equilibrium. The cochlea is involved in hearing. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '18',
  question: 'Which artery supplies oxygenated blood to the heart muscle?',
  options: ['Coronary artery', 'Carotid artery', 'Pulmonary artery', 'Aortic arch'],
  correctAnswer: 0,
  explanation: 'The coronary arteries branch from the ascending aorta and supply oxygenated blood to the myocardium. Blockage leads to angina or myocardial infarction. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '19',
  question: 'Which of the following is the largest gland in the human body?',
  options: ['Liver', 'Pancreas', 'Thyroid', 'Salivary gland'],
  correctAnswer: 0,
  explanation: 'The liver is the largest gland and performs vital metabolic, detoxifying, and synthetic functions including bile secretion. Hence, option a is correct.',
 }
];

// Replace placeholder questions with real ones for Grand Test 1
if (testQuestionsByCategory['mcq-1']) {
  testQuestionsByCategory['mcq-1'] = mcqSet1Questions;
}
];


testQuestionsByCategory['mcq-1'] = mcqSet1Questions;

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
