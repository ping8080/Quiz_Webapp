import { TestCategory } from '../types/test';

// Define subcategories for each category
const grandTestSubcategories = Array.from({ length: 15 }, (_, i) => ({
  id: `grand-test-${i + 1}`,
  name: `Grand Test ${i + 1}`,
  description: `Comprehensive grand test covering all nursing topics - Test ${i + 1}`,
  totalQuestions: 100,
  estimatedTime: 120,
  difficulty: 'Hard' as const,
  isPremium: true
}));

const hytSubcategories = Array.from({ length: 9 }, (_, i) => ({
  id: `hyt-test-${i + 1}`,
  name: `HYT Test ${i + 1}`,
  description: `High Yield Topics test focusing on important nursing concepts - Test ${i + 1}`,
  totalQuestions: 50,
  estimatedTime: 60,
  difficulty: 'Medium' as const,
  isPremium: true
}));

const mcqSubcategories = Array.from({ length: 94 }, (_, i) => ({
  id: `mcq-${i + 1}`,
  name: `MCQ Set ${i + 1}`,
  description: `Multiple Choice Questions set covering various nursing topics - Set ${i + 1}`,
  totalQuestions: 25,
  estimatedTime: 30,
  difficulty: 'Medium' as const,
  isPremium: i >= 1 // First 1 are free, rest are premium
}));

const nstSubcategories = Array.from({ length: 6 }, (_, i) => ({
  id: `nst-${i + 1}`,
  name: `NST ${i + 1}`,
  description: `Nursing Skill Test focusing on practical nursing skills - Test ${i + 1}`,
  totalQuestions: 40,
  estimatedTime: 45,
  difficulty: 'Medium' as const,
  isPremium: true
}));

const nsatSubcategories = [{
  id: 'nsat-1',
  name: 'NSAT Test',
  description: 'Nursing Skill Assessment Test - Comprehensive evaluation',
  totalQuestions: 75,
  estimatedTime: 90,
  difficulty: 'Hard' as const,
  isPremium: true
}];

const nntSubcategories = Array.from({ length: 10 }, (_, i) => ({
  id: `nnt-${i + 1}`,
  name: `NNT ${i + 1} ${i < 5 ? '[Pre]' : '[Mains]'}`,
  description: `National Nursing Test ${i < 5 ? 'Preliminary' : 'Mains'} - Test ${i + 1}`,
  totalQuestions: i < 5 ? 60 : 80,
  estimatedTime: i < 5 ? 75 : 100,
  difficulty: i < 5 ? 'Medium' as const : 'Hard' as const,
  isPremium: true
}));

const nursingEducathSubcategories = Array.from({ length: 21 }, (_, i) => ({
  id: `nursing-educath-${i + 1}`,
  name: `Nursing Educath ${i + 1}`,
  description: `Educational nursing test focusing on theoretical concepts - Test ${i + 1}`,
  totalQuestions: 35,
  estimatedTime: 40,
  difficulty: 'Medium' as const,
  isPremium: true
}));

const specialTestSubcategories = Array.from({ length: 18 }, (_, i) => ({
  id: `special-test-${i + 1}`,
  name: `Special Test ${i + 1}`,
  description: `Specialized nursing test covering advanced topics - Test ${i + 1}`,
  totalQuestions: 45,
  estimatedTime: 55,
  difficulty: 'Hard' as const,
  isPremium: true
}));

const satSubcategories = Array.from({ length: 4 }, (_, i) => ({
  id: `sat-${i + 1}`,
  name: `SAT ${i + 1}`,
  description: `Subject Assessment Test evaluating specific nursing subjects - Test ${i + 1}`,
  totalQuestions: 50,
  estimatedTime: 60,
  difficulty: 'Medium' as const,
  isPremium: true
}));

const super15Subcategories = Array.from({ length: 4 }, (_, i) => ({
  id: `super-15-${i + 1}`,
  name: `Super 15 Test ${i + 1} (Mains)`,
  description: `Super 15 Mains test with high-difficulty questions - Test ${i + 1}`,
  totalQuestions: 15,
  estimatedTime: 20,
  difficulty: 'Hard' as const,
  isPremium: true
}));

const super30Subcategories = Array.from({ length: 31 }, (_, i) => ({
  id: `super-30-${i + 1}`,
  name: `Super 30 Test ${i + 1} [P&M]`,
  description: `Super 30 Pre & Mains test with comprehensive coverage - Test ${i + 1}`,
  totalQuestions: 30,
  estimatedTime: 35,
  difficulty: 'Hard' as const,
  isPremium: true
}));

const super50Subcategories = Array.from({ length: 28 }, (_, i) => ({
  id: `super-50-${i + 1}`,
  name: `Super 50 Test ${i + 1}`,
  description: `Super 50 comprehensive test covering all nursing domains - Test ${i + 1}`,
  totalQuestions: 50,
  estimatedTime: 60,
  difficulty: 'Hard' as const,
  isPremium: true
}));

export const testCategories: TestCategory[] = [
  {
    id: 'grand-test',
    name: 'Grand Test',
    description: 'Comprehensive grand tests covering all nursing topics with detailed analysis',
    icon: '🏆',
    subcategories: grandTestSubcategories,
    totalQuestions: grandTestSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: grandTestSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'hyt',
    name: 'HYT',
    description: 'High Yield Topics tests focusing on the most important nursing concepts',
    icon: '🎯',
    subcategories: hytSubcategories,
    totalQuestions: hytSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: hytSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'mcq',
    name: 'MCQ',
    description: 'Multiple Choice Questions covering various nursing topics and specialties',
    icon: '🧠',
    subcategories: mcqSubcategories,
    totalQuestions: mcqSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: mcqSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: false // Mixed - some free, some premium
  },
  {
    id: 'nst',
    name: 'NST',
    description: 'Nursing Skill Tests focusing on practical nursing skills and competencies',
    icon: '🩺',
    subcategories: nstSubcategories,
    totalQuestions: nstSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: nstSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'nsat',
    name: 'NSAT',
    description: 'Nursing Skill Assessment Test - Comprehensive evaluation of nursing competencies',
    icon: '📋',
    subcategories: nsatSubcategories,
    totalQuestions: nsatSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: nsatSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'nnt',
    name: 'NNT [Pre & Mains]',
    description: 'National Nursing Test - Both Preliminary and Mains examination preparation',
    icon: '🏛️',
    subcategories: nntSubcategories,
    totalQuestions: nntSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: nntSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'nursing-educath',
    name: 'Nursing Educath',
    description: 'Educational nursing tests focusing on theoretical concepts and knowledge',
    icon: '📚',
    subcategories: nursingEducathSubcategories,
    totalQuestions: nursingEducathSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: nursingEducathSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'special-test',
    name: 'Special Test',
    description: 'Specialized nursing tests covering advanced topics and clinical scenarios',
    icon: '⭐',
    subcategories: specialTestSubcategories,
    totalQuestions: specialTestSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: specialTestSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'sat',
    name: 'Subject Assessment Test { SAT }',
    description: 'Subject Assessment Tests evaluating specific nursing subjects and domains',
    icon: '📝',
    subcategories: satSubcategories,
    totalQuestions: satSubcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: satSubcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'super-15',
    name: 'Super 15 Test (Mains)',
    description: 'Super 15 Mains tests with high-difficulty questions for advanced preparation',
    icon: '🚀',
    subcategories: super15Subcategories,
    totalQuestions: super15Subcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: super15Subcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'super-30',
    name: 'Super 30 Test [P&M]',
    description: 'Super 30 Pre & Mains tests with comprehensive coverage of all topics',
    icon: '💫',
    subcategories: super30Subcategories,
    totalQuestions: super30Subcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: super30Subcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'super-50',
    name: 'Super 50',
    description: 'Super 50 comprehensive tests covering all nursing domains and specialties',
    icon: '🌟',
    subcategories: super50Subcategories,
    totalQuestions: super50Subcategories.reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: super50Subcategories.reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  },
  {
    id: 'norcet-2021',
    name: 'NORCET 2021 Recall',
    description: 'Previous year questions from NORCET 2021 examination',
    icon: '📋',
    totalQuestions: 50,
    difficulty: 'Medium',
    isPremium: true,
    estimatedTime: 60
  },
  {
    id: 'anatomy-physiology',
    name: 'Anatomy & Physiology',
    description: 'Comprehensive questions on human anatomy and physiology',
    icon: '🫀',
    totalQuestions: 75,
    difficulty: 'Hard',
    isPremium: true,
    estimatedTime: 90
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology',
    description: 'Drug actions, interactions, and therapeutic applications',
    icon: '💊',
    totalQuestions: 60,
    difficulty: 'Hard',
    isPremium: true,
    estimatedTime: 75
  },
  {
    id: 'medical-surgical',
    name: 'Medical-Surgical Nursing',
    description: 'Adult health nursing and surgical procedures',
    icon: '🏥',
    totalQuestions: 80,
    difficulty: 'Medium',
    isPremium: true,
    estimatedTime: 100
  },
  {
    id: 'community-health',
    name: 'Community Health Nursing',
    description: 'Public health, epidemiology, and community care',
    icon: '🌍',
    totalQuestions: 45,
    difficulty: 'Medium',
    isPremium: true,
    estimatedTime: 55
  },
  {
    id: 'pediatric-nursing',
    name: 'Pediatric Nursing',
    description: 'Child health, growth, development, and pediatric care',
    icon: '👶',
    totalQuestions: 55,
    difficulty: 'Medium',
    isPremium: true,
    estimatedTime: 70
  },
  {
    id: 'obstetric-gynecology',
    name: 'Obstetric & Gynecological Nursing',
    description: 'Maternal health, pregnancy, and women\'s health care',
    icon: '🤱',
    totalQuestions: 65,
    difficulty: 'Medium',
    isPremium: true,
    estimatedTime: 80
  },
  {
    id: 'psychiatric-nursing',
    name: 'Psychiatric Nursing',
    description: 'Mental health, psychological disorders, and therapeutic care',
    icon: '🧠',
    totalQuestions: 40,
    difficulty: 'Medium',
    isPremium: true,
    estimatedTime: 50
  },
  {
    id: 'nursing-fundamentals',
    name: 'Nursing Fundamentals',
    description: 'Basic nursing principles, ethics, and professional practice',
    icon: '📚',
    totalQuestions: 50,
    difficulty: 'Easy',
    isPremium: true,
    estimatedTime: 60
  },
  {
    id: 'infection-control',
    name: 'Infection Control',
    description: 'Prevention and control of healthcare-associated infections',
    icon: '🦠',
    totalQuestions: 35,
    difficulty: 'Medium',
    isPremium: true,
    estimatedTime: 45
  }
];
// ✅ New combined category
export const testCategories: TestCategory[] = [
  {
    id: 'nnl-one',
    name: 'NNL One',
    description: 'All nursing tests under one unified category',
    icon: '🩺',
    subcategories: [
      ...grandTestSubcategories,
      ...hytSubcategories,
      ...mcqSubcategories,
      ...nstSubcategories,
      ...nsatSubcategories,
      ...nntSubcategories,
      ...nursingEducathSubcategories, 
      ...specialTestSubcategories,
      ...satSubcategories,
      ...super15Subcategories,
      ...super30Subcategories,
      ...super50Subcategories
    ],
    totalQuestions: [
      ...grandTestSubcategories,
      ...hytSubcategories,
      ...mcqSubcategories,
      ...nstSubcategories,
      ...nsatSubcategories,
      ...nntSubcategories,
      ...nursingEducathSubcategories,
      ...specialTestSubcategories,
      ...satSubcategories,
      ...super15Subcategories,
      ...super30Subcategories,
      ...super50Subcategories
    ].reduce((sum, sub) => sum + sub.totalQuestions, 0),
    totalTime: [
      ...grandTestSubcategories,
      ...hytSubcategories,
      ...mcqSubcategories,
      ...nstSubcategories,
      ...nsatSubcategories,
      ...nntSubcategories,
      ...nursingEducathSubcategories,
      ...specialTestSubcategories,
      ...satSubcategories,
      ...super15Subcategories,
      ...super30Subcategories,
      ...super50Subcategories
    ].reduce((sum, sub) => sum + sub.estimatedTime, 0),
    isPremium: true
  }
];
