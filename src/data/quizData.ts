import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "The Brahmaputra River originates from which country?",
    options: ["India", "Nepal", "China", "Bangladesh"],
    correctAnswer: 2,
    explanation: "The Brahmaputra originates from the Angsi Glacier in Tibet, China, and flows into India and Bangladesh.",
    category: "Geography"
  },
  {
    id: 2,
    question: "The Narmada River flows into which sea?",
    options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Red Sea"],
    correctAnswer: 0,
    explanation: "The Narmada flows westward into the Arabian Sea, unlike most Indian rivers which flow eastward.",
    category: "Geography"
  },
  {
    id: 3,
    question: "Which river is known as the 'Sorrow of Bihar'?",
    options: ["Kosi", "Ganga", "Gandak", "Son"],
    correctAnswer: 0,
    explanation: "The Kosi River is called the 'Sorrow of Bihar' due to its devastating floods.",
    category: "Geography"
  },
  {
    id: 4,
    question: "The Krishna River originates from which state?",
    options: ["Maharashtra", "Karnataka", "Andhra Pradesh", "Kerala"],
    correctAnswer: 0,
    explanation: "The Krishna River originates from Mahabaleshwar in Maharashtra.",
    category: "Geography"
  },
  {
    id: 5,
    question: "Which river forms the Sundarbans Delta?",
    options: ["Ganga and Brahmaputra", "Godavari and Krishna", "Narmada and Tapi", "Yamuna and Ganga"],
    correctAnswer: 0,
    explanation: "The Ganga and Brahmaputra rivers form the Sundarbans, the world's largest delta, in Bangladesh and India.",
    category: "Geography"
  },
  {
    id: 6,
    question: "During which of the following months does the southwest monsoon occur in India?",
    options: ["March to May", "June to September", "October to December", "January to March"],
    correctAnswer: 1,
    explanation: "The southwest monsoon brings heavy rainfall to most parts of India from June to September.",
    category: "Climate"
  },
  {
    id: 7,
    question: "What is the primary feature of the retreating monsoon?",
    options: ["Heavy rainfall in central India", "Hot and dry winds", "Clear skies and lower humidity", "Cyclonic storms over the Bay of Bengal"],
    correctAnswer: 3,
    explanation: "During the retreating monsoon in October-November, cyclonic storms often form over the Bay of Bengal, causing rainfall in coastal areas.",
    category: "Climate"
  },
  {
    id: 8,
    question: "Which phenomenon is responsible for a delayed or weak monsoon in India?",
    options: ["El Niño", "La Niña", "Cyclone", "Tsunami"],
    correctAnswer: 0,
    explanation: "El Niño, characterized by the warming of the Pacific Ocean, weakens the Indian monsoon, leading to drought conditions.",
    category: "Climate"
  },
  {
    id: 9,
    question: "The northeast monsoon primarily affects which region of India?",
    options: ["Western India", "Northern Plains", "Eastern India", "Tamil Nadu and Andhra Pradesh"],
    correctAnswer: 3,
    explanation: "The northeast monsoon occurs from October to December and brings significant rainfall to Tamil Nadu and parts of Andhra Pradesh.",
    category: "Climate"
  },
  {
    id: 10,
    question: "Which sector contributes the most to India's Gross Domestic Product (GDP)?",
    options: ["Agriculture", "Industry", "Services", "Mining"],
    correctAnswer: 2,
    explanation: "The service sector is the largest contributor to India's GDP, including IT, banking, and telecommunications.",
    category: "Economy"
  },
  {
    id: 11,
    question: "Which state is the largest producer of coal in India?",
    options: ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"],
    correctAnswer: 0,
    explanation: "Jharkhand has the largest coal reserves and is the leading producer of coal in India.",
    category: "Economy"
  },
  {
    id: 12,
    question: "What is the major source of irrigation in India?",
    options: ["Canals", "Wells and Tubewells", "Tanks", "Rivers"],
    correctAnswer: 1,
    explanation: "Wells and tubewells account for the majority of irrigation in India, especially in the northern plains.",
    category: "Agriculture"
  },
  {
    id: 13,
    question: "Which city is known as the 'Silicon Valley of India'?",
    options: ["Chennai", "Hyderabad", "Pune", "Bengaluru"],
    correctAnswer: 3,
    explanation: "Bengaluru is referred to as the 'Silicon Valley of India' for its thriving IT industry.",
    category: "Technology"
  },
  {
    id: 14,
    question: "Which crop is referred to as 'Golden Fiber' in India?",
    options: ["Jute", "Cotton", "Silk", "Hemp"],
    correctAnswer: 0,
    explanation: "Jute is known as the 'Golden Fiber' due to its economic importance in the textile industry.",
    category: "Agriculture"
  },
  {
    id: 15,
    question: "What is the primary objective of the 'Make in India' initiative?",
    options: ["Promoting exports", "Boosting manufacturing sector", "Increasing agricultural productivity", "Enhancing tourism"],
    correctAnswer: 1,
    explanation: "Launched in 2014, the 'Make in India' initiative aims to increase domestic manufacturing and create jobs.",
    category: "Government Schemes"
  },
  {
    id: 16,
    question: "Which is the highest civilian award in India?",
    options: ["Padma Bhushan", "Padma Shri", "Bharat Ratna", "Dronacharya Award"],
    correctAnswer: 2,
    explanation: "The Bharat Ratna is India's highest civilian award, given for exceptional service in any field of human endeavor.",
    category: "Awards"
  },
  {
    id: 17,
    question: "Which is the highest gallantry award in India?",
    options: ["Param Vir Chakra", "Ashoka Chakra", "Kirti Chakra", "Shaurya Chakra"],
    correctAnswer: 0,
    explanation: "The Param Vir Chakra is India's highest military decoration awarded for acts of valor in the presence of the enemy.",
    category: "Awards"
  },
  {
    id: 18,
    question: "The Sahitya Akademi Award is given for excellence in which field?",
    options: ["Music", "Literature", "Dance", "Journalism"],
    correctAnswer: 1,
    explanation: "The Sahitya Akademi Award is a literary honor awarded annually to writers for their outstanding literary works in Indian languages.",
    category: "Awards"
  },
  {
    id: 19,
    question: "The Green Revolution in India was primarily aimed at achieving self-sufficiency in which sector?",
    options: ["Industrial Production", "Textile Industry", "Agriculture", "Fisheries"],
    correctAnswer: 2,
    explanation: "The Green Revolution introduced modern agricultural techniques, increasing food grain production, especially wheat and rice.",
    category: "History"
  },
  {
    id: 20,
    question: "What is the main objective of the Digital India initiative?",
    options: ["Promote cashless economy", "Provide internet connectivity in rural areas", "Improve digital literacy", "All of the above"],
    correctAnswer: 3,
    explanation: "Digital India aims to transform India into a digitally empowered society by promoting e-governance, digital literacy, and financial inclusion.",
    category: "Government Schemes"
  }
];

// Premium questions (21-100) - These require premium access
export const premiumQuizQuestions: QuizQuestion[] = [
  {
    id: 21,
    question: "What is the primary goal of the 'Startup India' initiative?",
    options: ["Provide free education to entrepreneurs", "Offer financial assistance to farmers", "Promote entrepreneurship and innovation", "Develop highways and railways"],
    correctAnswer: 2,
    explanation: "Startup India encourages innovation, supports startups through funding and mentorship, and fosters a robust entrepreneurial ecosystem.",
    category: "Government Schemes"
  },
  {
    id: 22,
    question: "Which Indian institution is responsible for formulating monetary policy?",
    options: ["Ministry of Finance", "Reserve Bank of India (RBI)", "State Bank of India (SBI)", "NITI Aayog"],
    correctAnswer: 1,
    explanation: "The RBI is India's central bank, responsible for regulating monetary policy to ensure economic stability.",
    category: "Economy"
  },
  // Add more premium questions here (questions 23-100 from your HTML file)
  // For brevity, I'm including just a few examples
  {
    id: 23,
    question: "The headquarter of the World Health Organization (WHO) is situated in:",
    options: ["Rome, Italy", "Paris, France", "Geneva, Switzerland", "New York, USA"],
    correctAnswer: 2,
    explanation: "The headquarter of WHO is located in Geneva, focusing on global public health issues.",
    category: "International Organizations"
  },
  {
    id: 24,
    question: "Which Indian institution acts as a policy think tank of the Government of India?",
    options: ["NITI Aayog", "Planning Commission", "Finance Commission", "Election Commission of India"],
    correctAnswer: 0,
    explanation: "NITI Aayog was established in 2015 to replace the Planning Commission and provides strategic policy recommendations to the government.",
    category: "Government"
  },
  {
    id: 25,
    question: "Which Indian institution is responsible for conducting free and fair elections in the country?",
    options: ["Election Commission of India (ECI)", "Supreme Court of India", "NITI Aayog", "Ministry of Home Affairs"],
    correctAnswer: 0,
    explanation: "The ECI is an autonomous constitutional authority responsible for managing elections at the national and state levels in India.",
    category: "Government"
  }
  // Continue with remaining questions...
];