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

// Real questions for Grand Test 1
const grandTest1Questions: TestQuestion[] = [
    {
    id: '1',
    question: 'Which of the following statement is correct regarding arteries?',
    options: [
      'They always carry oxygenated blood',
      'Pulmonary artery carries oxygenated blood',
      'Umbilical arteries carry oxygenated blood',
      'They are composed of smooth muscles'
    ],
    correctAnswer: 3,
    explanation: 'Arteries are tube-like structures that transport blood and lymph to and from every organ in the body. They are composed of smooth muscle allowing constriction and dilation through the parasympathetic nervous system. Hence, option d is correct. Arteries often carry oxygenated blood away from the heart and into the rest of the body system, except for the pulmonary artery which carries deoxygenated blood from the heart to the lungs. Umbilical arteries carry deoxygenated blood from the fetus to the placenta.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '2',
    question: 'Veins differ from arteries in that they do not have:',
    options: [
      'Valves',
      'Larger lumen',
      'Thinner walls',
      'More elastic tissue'
    ],
    correctAnswer: 3,
    explanation: 'Veins are thin-walled and less elastic as compared to arteries, which are thick-walled and highly muscular except for arteries of the cranium and vertebral column. The lesser muscular and elastic component justifies the lower venous pressure than the arterial pressure. Hence, option d is correct. Veins have a wider lumen whereas arteries have a narrow lumen. Valves are present in veins to maintain unidirectional blood flow whereas they are absent in arteries.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '3',
    question: 'Melatonin is secreted by:',
    options: [
      'The pancreas',
      'The pineal gland',
      'The keratinocytes of the skin',
      'The ovaries'
    ],
    correctAnswer: 1,
    explanation: 'The pineal gland acts as a biological clock for physiological and behavioral control. It secretes melatonin (an N-acetylated product of serotonin), which inhibits the secretion of gonadotrophins (GnRH) from the hypothalamus. It regulates neuroendocrine activity involving the pituitary and other endocrine organs. Melatonin acts via MT1 and MT2 receptors: MT1 promotes sleep and MT2 synchronizes the circadian rhythm. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '4',
    question: 'The hormone that increases water reabsorption by inserting water channel or aquaporin is:',
    options: [
      'Angiotensin',
      'Anti-diuretic hormone',
      'Aldosterone',
      'Atrial natriuretic peptide'
    ],
    correctAnswer: 1,
    explanation: 'Anti-diuretic hormone (vasopressin) controls the amount of water reabsorbed from the collecting ducts and tubules in the kidney. It is produced by the hypothalamus and delivered to the posterior pituitary for storage and release. Angiotensin causes vasoconstriction and increases blood pressure. Aldosterone helps sodium conservation, while atrial natriuretic peptide reduces extracellular fluid volume. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '5',
    question: 'Where should the physician place the stethoscope to listen to the sound of the mitral valve?',
    options: [
      'Over the medial end of the second right intercostal space',
      'In the left fifth intercostal space at the midclavicular line',
      'Over the right half of the lower end of the body of the sternum',
      'In the left fourth intercostal space at the midclavicular line'
    ],
    correctAnswer: 1,
    explanation: 'The mitral valve (left atrioventricular valve) produces the apical beat of the heart, most audible over the left fifth intercostal space at the midclavicular line. The pulmonary valve is best heard over the second left intercostal space, and the aortic valve over the second right intercostal space. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '6',
    question: 'Which of the following bacteria is an atypical organism responsible for causing pneumonia?',
    options: [
      'Legionella',
      'Streptococcus pneumoniae',
      'Haemophilus influenzae',
      'Staphylococcus aureus'
    ],
    correctAnswer: 0,
    explanation: 'Atypical pneumonia is caused by organisms that cannot be cultured on standard media, such as Legionella species, Mycoplasma pneumoniae, Chlamydia pneumoniae, and Chlamydia psittaci. Typical pneumonia is mainly caused by Streptococcus pneumoniae and others. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '7',
    question: 'The bacteria that retain the stain in Gram’s method of staining is a:',
    options: [
      'Gram-positive bacteria',
      'Spores of bacteria',
      'Broad spectrum bacteria',
      'Gram-negative bacteria'
    ],
    correctAnswer: 0,
    explanation: 'Gram-positive bacteria retain the crystal violet stain in Gram’s method (e.g., Staphylococcus, Streptococcus). Gram-negative bacteria (e.g., E. coli, Neisseria) do not retain it. Spores are dormant forms, and “broad spectrum” refers to antibiotic coverage. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '8',
    question: 'The type of hypersensitivity reaction due to IgE-mediated histamine release is called:',
    options: ['Type 4', 'Type 1', 'Type 2', 'Type 3'],
    correctAnswer: 1,
    explanation: 'Type 1 or anaphylactic hypersensitivity is mediated by IgE antibodies that trigger mast-cell histamine release after exposure to allergens. It manifests in bronchial asthma, allergic rhinitis, dermatitis, food allergy, etc. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '9',
    question: 'The immunoglobulin that can cross placenta:',
    options: ['IgA', 'IgM', 'IgG', 'IgD'],
    correctAnswer: 2,
    explanation: 'IgG is the only maternal immunoglobulin that crosses the placenta. It forms about 80 % of total immunoglobulins, activates complement, and provides fetal immunity. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '10',
    question: 'The nurse receives an infant in the OPD with complaints of vomiting and poor feeding. On examination, musty odor is present in baby’s sweat and urine. Guthrie test is positive. The nurse should suspect which of the following?',
    options: [
      'Phenylketonuria',
      'Maple syrup urine disease',
      'Trimethylaminuria',
      'None of the above'
    ],
    correctAnswer: 0,
    explanation: 'The findings are suggestive of phenylketonuria—an inborn error of metabolism caused by mutation in phenylalanine hydroxylase leading to accumulation of phenylalanine. It causes developmental delay, microcephaly, seizures, and musty body odor. Guthrie test detects it in newborns. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '11',
    question: 'Which of the following tests helps in early detection of HIV infection?',
    options: [
      'Western blot test',
      'ELISA test',
      'Polymerase chain reaction (PCR)',
      'CD4 count'
    ],
    correctAnswer: 2,
    explanation: 'Polymerase Chain Reaction (PCR) detects HIV RNA/DNA even before antibodies appear, making it the earliest diagnostic test for HIV infection. ELISA detects antibodies after the window period; Western blot is confirmatory, and CD4 count monitors disease progression. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '12',
    question: 'Which of the following is NOT a sexually transmitted disease (STD)?',
    options: [
      'Gonorrhea',
      'Hepatitis B',
      'Syphilis',
      'Rheumatic fever'
    ],
    correctAnswer: 3,
    explanation: 'Gonorrhea, Syphilis, and Hepatitis B are sexually transmitted diseases. Rheumatic fever is a post-streptococcal autoimmune condition affecting the heart, joints, and brain; it is not transmitted sexually. Hence, option d is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '13',
    question: 'Which of the following hormones is not secreted by the anterior pituitary gland?',
    options: [
      'Growth hormone',
      'Thyroid stimulating hormone',
      'Adrenocorticotropic hormone',
      'Oxytocin'
    ],
    correctAnswer: 3,
    explanation: 'Oxytocin is secreted by the posterior pituitary, not the anterior. The anterior lobe secretes GH, TSH, ACTH, FSH, LH, and prolactin. Oxytocin induces uterine contraction and milk ejection. Hence, option d is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '14',
    question: 'Which of the following cells produce insulin?',
    options: [
      'Alpha cells of pancreas',
      'Beta cells of pancreas',
      'Delta cells of pancreas',
      'Acinar cells of pancreas'
    ],
    correctAnswer: 1,
    explanation: 'Insulin is produced by the β-cells of the islets of Langerhans in the pancreas. Alpha cells secrete glucagon, delta cells secrete somatostatin, and acinar cells secrete digestive enzymes. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '15',
    question: 'Which of the following vitamins is fat-soluble?',
    options: [
      'Vitamin B12',
      'Vitamin C',
      'Vitamin A',
      'Vitamin B6'
    ],
    correctAnswer: 2,
    explanation: 'Vitamins A, D, E, K are fat-soluble; they are stored in body fat and liver. Vitamins B and C are water-soluble and not stored in large amounts. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '16',
    question: 'Deficiency of Vitamin B12 causes which of the following conditions?',
    options: [
      'Pernicious anemia',
      'Scurvy',
      'Rickets',
      'Night blindness'
    ],
    correctAnswer: 0,
    explanation: 'Vitamin B12 deficiency leads to megaloblastic or pernicious anemia due to impaired DNA synthesis in red blood cells. Scurvy is due to Vitamin C deficiency, rickets due to Vitamin D deficiency, and night blindness due to Vitamin A deficiency. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '17',
    question: 'Which of the following vaccines is a live attenuated vaccine?',
    options: [
      'BCG',
      'DPT',
      'Hepatitis B',
      'Tetanus toxoid'
    ],
    correctAnswer: 0,
    explanation: 'BCG (Bacillus Calmette–Guérin) vaccine is a live attenuated strain of *Mycobacterium bovis* used against tuberculosis. DPT and Tetanus toxoid are inactivated/toxoid vaccines; Hepatitis B is recombinant. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '18',
    question: 'The enzyme that converts fibrinogen to fibrin during blood coagulation is:',
    options: [
      'Thrombin',
      'Prothrombin',
      'Thromboplastin',
      'Plasmin'
    ],
    correctAnswer: 0,
    explanation: 'Thrombin is the active enzyme that converts soluble fibrinogen into insoluble fibrin, forming the mesh for a blood clot. Prothrombin is its inactive precursor, thromboplastin initiates its activation, and plasmin dissolves clots. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '19',
    question: 'Which organ is primarily responsible for detoxification and metabolism of drugs?',
    options: [
      'Kidney',
      'Liver',
      'Spleen',
      'Lung'
    ],
    correctAnswer: 1,
    explanation: 'The liver contains cytochrome P450 enzyme systems that metabolize and detoxify drugs, alcohol, and other toxins. The kidney excretes metabolites, but the main biotransformation occurs in the liver. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '20',
    question: 'Which of the following layers of the skin contains blood vessels and nerves?',
    options: [
      'Epidermis',
      'Dermis',
      'Stratum corneum',
      'Stratum basale'
    ],
    correctAnswer: 1,
    explanation: 'The dermis, located beneath the epidermis, is a connective-tissue layer containing blood vessels, lymphatics, and nerve endings. The epidermis is avascular and receives nutrition by diffusion. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '21',
    question: 'Which of the following cells are responsible for antibody production?',
    options: [
      'T lymphocytes',
      'B lymphocytes',
      'Neutrophils',
      'Macrophages'
    ],
    correctAnswer: 1,
    explanation: 'B lymphocytes differentiate into plasma cells that produce and secrete antibodies (immunoglobulins). T lymphocytes mediate cellular immunity, while neutrophils and macrophages perform phagocytosis. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '22',
    question: 'The functional unit of kidney is called:',
    options: ['Nephron', 'Neuron', 'Glomerulus', 'Tubule'],
    correctAnswer: 0,
    explanation: 'Each kidney contains about one million nephrons, the structural and functional units that filter blood, reabsorb needed substances, and excrete wastes as urine. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '23',
    question: 'The pacemaker of the heart is located in which of the following?',
    options: [
      'Atrioventricular node',
      'Sinoatrial node',
      'Bundle of His',
      'Purkinje fibers'
    ],
    correctAnswer: 1,
    explanation: 'The sinoatrial (SA) node, located in the right atrium, initiates the electrical impulse that sets the rhythm of the heartbeat; hence it is called the natural pacemaker. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '24',
    question: 'The outermost meningeal layer covering the brain is:',
    options: ['Pia mater', 'Arachnoid mater', 'Dura mater', 'Choroid plexus'],
    correctAnswer: 2,
    explanation: 'The meninges consist of three layers: dura mater (outermost, tough), arachnoid mater (middle, web-like), and pia mater (innermost, vascular). Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '25',
    question: 'Which part of the brain regulates body temperature?',
    options: [
      'Cerebrum',
      'Cerebellum',
      'Hypothalamus',
      'Medulla oblongata'
    ],
    correctAnswer: 2,
    explanation: 'The hypothalamus regulates body temperature, hunger, thirst, and endocrine activities by maintaining homeostasis. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '26',
    question: 'Which of the following cranial nerves is purely sensory?',
    options: [
      'Trigeminal nerve',
      'Facial nerve',
      'Olfactory nerve',
      'Glossopharyngeal nerve'
    ],
    correctAnswer: 2,
    explanation: 'The olfactory nerve (CN I) is purely sensory and conveys the sense of smell. Trigeminal, facial, and glossopharyngeal nerves are mixed (both sensory and motor). Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '27',
    question: 'Which artery supplies blood to the heart muscle?',
    options: [
      'Carotid artery',
      'Pulmonary artery',
      'Coronary artery',
      'Aorta'
    ],
    correctAnswer: 2,
    explanation: 'Coronary arteries arise from the ascending aorta and supply oxygenated blood to the myocardium. Blockage of these arteries leads to angina or myocardial infarction. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '28',
    question: 'Which part of the eye regulates the amount of light entering the eyeball?',
    options: ['Lens', 'Cornea', 'Iris', 'Retina'],
    correctAnswer: 2,
    explanation: 'The iris is a circular muscular structure that controls pupil diameter and thereby regulates light entry into the eye. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '29',
    question: 'Which hormone increases blood calcium levels?',
    options: [
      'Calcitonin',
      'Parathyroid hormone',
      'Insulin',
      'Thyroxine'
    ],
    correctAnswer: 1,
    explanation: 'Parathyroid hormone (PTH) secreted by parathyroid glands increases blood calcium by stimulating bone resorption, increasing intestinal absorption, and reducing renal excretion. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '30',
    question: 'Which of the following cells are phagocytic in nature?',
    options: [
      'Lymphocytes',
      'Monocytes',
      'Eosinophils',
      'Basophils'
    ],
    correctAnswer: 1,
    explanation: 'Monocytes circulating in blood and macrophages in tissues are professional phagocytes that engulf and digest pathogens. Neutrophils also show phagocytic activity, whereas eosinophils and basophils are mainly involved in allergic reactions. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '31',
    question: 'Which part of the brain controls balance and coordination of body movements?',
    options: [
      'Cerebrum',
      'Cerebellum',
      'Medulla oblongata',
      'Pons'
    ],
    correctAnswer: 1,
    explanation: 'The cerebellum lies behind the brainstem and coordinates voluntary movements, posture, and balance. Damage causes ataxia or loss of coordination. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '32',
    question: 'Which of the following is the pacemaker of the heart?',
    options: [
      'Atrioventricular node',
      'Bundle of His',
      'Sinoatrial node',
      'Purkinje fibers'
    ],
    correctAnswer: 2,
    explanation: 'The sinoatrial node (SA node) located in the right atrium initiates each heartbeat and sets the pace for cardiac rhythm, hence known as the natural pacemaker of the heart. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '33',
    question: 'Which blood group is known as the universal donor?',
    options: [
      'A positive',
      'AB positive',
      'O negative',
      'B negative'
    ],
    correctAnswer: 2,
    explanation: 'Individuals with O negative blood group lack A, B, and Rh antigens, making their red cells compatible for transfusion to most other blood groups. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '34',
    question: 'The vitamin essential for normal vision is:',
    options: [
      'Vitamin A',
      'Vitamin B1',
      'Vitamin C',
      'Vitamin D'
    ],
    correctAnswer: 0,
    explanation: 'Vitamin A (retinol) is required for the synthesis of rhodopsin in retinal photoreceptor cells. Deficiency causes night blindness and xerophthalmia. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '35',
    question: 'Which of the following organs is responsible for the secretion of bile?',
    options: [
      'Pancreas',
      'Liver',
      'Gall bladder',
      'Stomach'
    ],
    correctAnswer: 1,
    explanation: 'The liver secretes bile which aids in fat emulsification and absorption. The gall bladder stores and concentrates bile but does not produce it. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '36',
    question: 'The main function of the large intestine is:',
    options: [
      'Digestion of carbohydrates',
      'Absorption of water and electrolytes',
      'Secretion of digestive enzymes',
      'Absorption of proteins'
    ],
    correctAnswer: 1,
    explanation: 'The large intestine absorbs water and electrolytes, forming and storing feces. Digestion of carbohydrates and proteins occurs in the small intestine. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '37',
    question: 'Which of the following organs produces digestive enzymes like trypsin and lipase?',
    options: [
      'Liver',
      'Pancreas',
      'Gall bladder',
      'Small intestine'
    ],
    correctAnswer: 1,
    explanation: 'The pancreas secretes digestive enzymes such as amylase, trypsin, and lipase that help digest carbohydrates, proteins, and fats. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '38',
    question: 'Which hormone is responsible for milk ejection during lactation?',
    options: [
      'Prolactin',
      'Oxytocin',
      'Progesterone',
      'Estrogen'
    ],
    correctAnswer: 1,
    explanation: 'Oxytocin released from the posterior pituitary stimulates contraction of myoepithelial cells in the breast, causing milk ejection (let-down reflex). Prolactin stimulates milk production. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '39',
    question: 'Which of the following is the functional unit of the nervous system?',
    options: ['Neuron', 'Axon', 'Synapse', 'Dendrite'],
    correctAnswer: 0,
    explanation: 'The neuron is the structural and functional unit of the nervous system, responsible for transmitting electrical impulses. Axon, dendrite, and synapse are its components. Hence, option a is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '40',
    question: 'Which part of the brain controls respiration and heart rate?',
    options: [
      'Cerebrum',
      'Cerebellum',
      'Medulla oblongata',
      'Hypothalamus'
    ],
    correctAnswer: 2,
    explanation: 'The medulla oblongata, part of the brainstem, regulates vital autonomic functions including respiration, cardiac rhythm, and vasomotor control. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '41',
    question: 'Which of the following structures connects the fetus with the placenta?',
    options: [
      'Amniotic sac',
      'Umbilical cord',
      'Yolk sac',
      'Amnion'
    ],
    correctAnswer: 1,
    explanation: 'The umbilical cord connects the fetus to the placenta, allowing exchange of oxygen, nutrients, and waste through umbilical vessels. The amnion forms the amniotic sac, and the yolk sac provides early nutrition. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '42',
    question: 'Which of the following is a function of cerebrospinal fluid (CSF)?',
    options: [
      'Transports oxygen to brain cells',
      'Provides nutrients and removes waste',
      'Secretes hormones',
      'Stores neurotransmitters'
    ],
    correctAnswer: 1,
    explanation: 'Cerebrospinal fluid (CSF) cushions the brain and spinal cord, maintains intracranial pressure, provides nutrients, and removes metabolic waste. Hence, option b is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '43',
    question: 'Which part of the ear is responsible for maintaining balance?',
    options: [
      'Cochlea',
      'Eustachian tube',
      'Semicircular canals',
      'Tympanic membrane'
    ],
    correctAnswer: 2,
    explanation: 'The semicircular canals in the inner ear contain fluid and sensory hair cells that detect head rotation and help maintain balance. The cochlea is involved in hearing. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '44',
    question: 'Which of the following hormones stimulates uterine contractions during labor?',
    options: [
      'Estrogen',
      'Progesterone',
      'Prolactin',
      'Oxytocin'
    ],
    correctAnswer: 3,
    explanation: 'Oxytocin from the posterior pituitary causes strong uterine contractions during labor and facilitates milk ejection after childbirth. Hence, option d is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '45',
    question: 'Which of the following structures stores urine before it is excreted?',
    options: [
      'Kidney',
      'Ureter',
      'Urinary bladder',
      'Urethra'
    ],
    correctAnswer: 2,
    explanation: 'The urinary bladder is a muscular sac that temporarily stores urine before micturition. Kidneys produce urine, ureters transport it, and the urethra expels it. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '46',
    question: 'Which of the following blood components play an essential role in blood clotting?',
    options: [
      'RBCs',
      'WBCs',
      'Platelets',
      'Plasma'
    ],
    correctAnswer: 2,
    explanation: 'Platelets (thrombocytes) release clotting factors that activate the coagulation cascade to form fibrin clots and stop bleeding. RBCs carry oxygen and WBCs provide immunity. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  },
  {
    id: '47',
    question: 'Which part of the respiratory system is the site for gaseous exchange?',
    options: [
      'Bronchi',
      'Bronchioles',
      'Alveoli',
      'Trachea'
    ],
    correctAnswer: 2,
    explanation: 'Alveoli are tiny air sacs in the lungs where gaseous exchange of oxygen and carbon dioxide occurs across the thin alveolar-capillary membrane by diffusion. Hence, option c is correct.',
    category: 'Grand Test-1 Prelims',
    difficulty: 'Moderate'
  }
];

// Replace placeholder questions with real ones for Grand Test 1
if (testQuestionsByCategory['grand-test-1']) {
  testQuestionsByCategory['grand-test-1'] = grandTest1Questions;
}

// Real questions for MCQ 
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
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '20',
  question: 'Which structure connects the fetus to the placenta?',
  options: ['Yolk sac', 'Umbilical cord', 'Amniotic sac', 'Amnion'],
  correctAnswer: 1,
  explanation: 'The umbilical cord connects the fetus and placenta, containing blood vessels that allow exchange of nutrients, gases, and waste between mother and fetus. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '21',
  question: 'Which part of the brain controls respiration and heart rate?',
  options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Pons'],
  correctAnswer: 2,
  explanation: 'The medulla oblongata is part of the brainstem and regulates vital autonomic functions such as breathing, cardiac rhythm, and vasomotor control. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '22',
  question: 'Which of the following cells are phagocytic in nature?',
  options: ['Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'],
  correctAnswer: 1,
  explanation: 'Monocytes and macrophages are professional phagocytes that engulf and destroy pathogens and cellular debris. Neutrophils are also phagocytic. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '23',
  question: 'Which of the following is the largest part of the human brain?',
  options: ['Cerebrum', 'Cerebellum', 'Pons', 'Medulla oblongata'],
  correctAnswer: 0,
  explanation: 'The cerebrum is the largest part of the brain and is responsible for higher mental functions such as reasoning, memory, and voluntary actions. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '24',
  question: 'Which of the following blood groups is known as the universal recipient?',
  options: ['O negative', 'AB positive', 'A positive', 'B positive'],
  correctAnswer: 1,
  explanation: 'AB positive individuals can receive blood from all groups as they have both A and B antigens and no antibodies against them. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '25',
  question: 'Which of the following structures in the eye is responsible for vision in dim light?',
  options: ['Cones', 'Rods', 'Cornea', 'Lens'],
  correctAnswer: 1,
  explanation: 'Rods are photoreceptor cells sensitive to low light intensity and are responsible for night vision. Cones function in bright light and color perception. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '26',
  question: 'Which blood vessels carry blood from different parts of the body to the heart?',
  options: ['Arteries', 'Veins', 'Capillaries', 'Arterioles'],
  correctAnswer: 1,
  explanation: 'Veins carry deoxygenated blood from tissues to the heart, except pulmonary veins which carry oxygenated blood from lungs to the heart. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '27',
  question: 'Which valve prevents backflow of blood from left ventricle to left atrium?',
  options: ['Tricuspid valve', 'Mitral valve', 'Pulmonary valve', 'Aortic valve'],
  correctAnswer: 1,
  explanation: 'The mitral (bicuspid) valve prevents backflow of blood from the left ventricle into the left atrium during ventricular contraction. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '28',
  question: 'Which part of the respiratory system prevents food from entering the windpipe?',
  options: ['Epiglottis', 'Larynx', 'Pharynx', 'Trachea'],
  correctAnswer: 0,
  explanation: 'The epiglottis is a flap-like structure that closes over the glottis during swallowing to prevent food from entering the trachea. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '29',
  question: 'Which hormone regulates the sleep–wake cycle?',
  options: ['Melatonin', 'Serotonin', 'Insulin', 'Cortisol'],
  correctAnswer: 0,
  explanation: 'Melatonin secreted by the pineal gland regulates the circadian rhythm or sleep–wake cycle. Its secretion increases in darkness and decreases in light. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '30',
  question: 'Which of the following bones is part of the axial skeleton?',
  options: ['Femur', 'Humerus', 'Vertebra', 'Clavicle'],
  correctAnswer: 2,
  explanation: 'The axial skeleton includes the skull, vertebral column, and thoracic cage. The appendicular skeleton includes limbs and girdles. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '31',
  question: 'Which of the following organs produces digestive enzymes like trypsin and lipase?',
  options: ['Liver', 'Pancreas', 'Gall bladder', 'Small intestine'],
  correctAnswer: 1,
  explanation: 'The pancreas secretes digestive enzymes such as trypsin, amylase, and lipase that aid in digestion of proteins, carbohydrates, and fats. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '32',
  question: 'Which blood cells help in blood clotting?',
  options: ['RBCs', 'WBCs', 'Platelets', 'Lymphocytes'],
  correctAnswer: 2,
  explanation: 'Platelets (thrombocytes) release clotting factors that initiate the coagulation process to stop bleeding. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '33',
  question: 'Which of the following is the largest artery in the human body?',
  options: ['Pulmonary artery', 'Aorta', 'Carotid artery', 'Femoral artery'],
  correctAnswer: 1,
  explanation: 'The aorta arises from the left ventricle and distributes oxygenated blood to all parts of the body through its branches. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '34',
  question: 'Which of the following hormones is secreted by the adrenal medulla?',
  options: ['Aldosterone', 'Cortisol', 'Adrenaline', 'Insulin'],
  correctAnswer: 2,
  explanation: 'The adrenal medulla secretes adrenaline (epinephrine) and noradrenaline, which prepare the body for "fight or flight" response. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '35',
  question: 'Which chamber of the heart receives deoxygenated blood from the body?',
  options: ['Left atrium', 'Right atrium', 'Left ventricle', 'Right ventricle'],
  correctAnswer: 1,
  explanation: 'The right atrium receives deoxygenated blood from the body through the superior and inferior vena cava. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '36',
  question: 'Which hormone regulates sodium and potassium balance in the body?',
  options: ['Aldosterone', 'Cortisol', 'ADH', 'Insulin'],
  correctAnswer: 0,
  explanation: 'Aldosterone, secreted by the adrenal cortex, promotes sodium reabsorption and potassium excretion by the kidneys, maintaining electrolyte balance. Hence, option a is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '37',
  question: 'Which part of the digestive system absorbs most of the nutrients?',
  options: ['Stomach', 'Small intestine', 'Large intestine', 'Rectum'],
  correctAnswer: 1,
  explanation: 'The small intestine, particularly the jejunum and ileum, is responsible for absorption of most nutrients into the bloodstream. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '38',
  question: 'Which part of the female reproductive system is the site of fertilization?',
  options: ['Ovary', 'Uterus', 'Fallopian tube', 'Cervix'],
  correctAnswer: 2,
  explanation: 'Fertilization usually occurs in the ampulla of the fallopian tube where the ovum and sperm meet. Hence, option c is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '39',
  question: 'Which of the following organs stores bile?',
  options: ['Liver', 'Gall bladder', 'Pancreas', 'Small intestine'],
  correctAnswer: 1,
  explanation: 'The gall bladder stores and concentrates bile produced by the liver, releasing it into the small intestine during digestion. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
},
{
  id: '40',
  question: 'Which of the following is a structural and functional unit of the nervous system?',
  options: ['Axon', 'Neuron', 'Dendrite', 'Synapse'],
  correctAnswer: 1,
  explanation: 'The neuron is the structural and functional unit of the nervous system that transmits electrical impulses. Axon and dendrite are its components. Hence, option b is correct.',
  category: 'MCQ Set 1 A&P_RRB',
  difficulty: 'Moderate'
}
];

// Replace placeholder questions with real ones for MCQ 
if (testQuestionsByCategory['mcq-set-1']) {
  testQuestionsByCategory['mcq-set-1'] = mcqSet1Questions;
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
