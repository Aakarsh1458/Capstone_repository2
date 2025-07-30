import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How often do you feel overwhelmed by daily tasks?",
      options: [
        { value: 1, text: "Never", emoji: "😊" },
        { value: 2, text: "Rarely", emoji: "🙂" },
        { value: 3, text: "Sometimes", emoji: "😐" },
        { value: 4, text: "Often", emoji: "😟" },
        { value: 5, text: "Always", emoji: "😰" }
      ]
    },
    {
      id: 2,
      question: "How would you rate your sleep quality?",
      options: [
        { value: 1, text: "Excellent", emoji: "😴" },
        { value: 2, text: "Good", emoji: "😊" },
        { value: 3, text: "Fair", emoji: "😐" },
        { value: 4, text: "Poor", emoji: "😴" },
        { value: 5, text: "Very Poor", emoji: "😵" }
      ]
    },
    {
      id: 3,
      question: "How often do you feel anxious or worried?",
      options: [
        { value: 1, text: "Never", emoji: "😌" },
        { value: 2, text: "Rarely", emoji: "🙂" },
        { value: 3, text: "Sometimes", emoji: "😐" },
        { value: 4, text: "Often", emoji: "😟" },
        { value: 5, text: "Always", emoji: "😰" }
      ]
    },
    {
      id: 4,
      question: "How satisfied are you with your social connections?",
      options: [
        { value: 1, text: "Very Satisfied", emoji: "😊" },
        { value: 2, text: "Satisfied", emoji: "🙂" },
        { value: 3, text: "Neutral", emoji: "😐" },
        { value: 4, text: "Dissatisfied", emoji: "😟" },
        { value: 5, text: "Very Dissatisfied", emoji: "😔" }
      ]
    },
    {
      id: 5,
      question: "How often do you practice self-care activities?",
      options: [
        { value: 1, text: "Daily", emoji: "💖" },
        { value: 2, text: "Weekly", emoji: "😊" },
        { value: 3, text: "Monthly", emoji: "😐" },
        { value: 4, text: "Rarely", emoji: "😟" },
        { value: 5, text: "Never", emoji: "😔" }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    
    if (percentage <= 20) return { level: "Excellent", color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/50" };
    if (percentage <= 40) return { level: "Good", color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/50" };
    if (percentage <= 60) return { level: "Fair", color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/50" };
    if (percentage <= 80) return { level: "Needs Attention", color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/50" };
    return { level: "Critical", color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/50" };
  };

  const getRecommendations = (level) => {
    const recommendations = {
      "Excellent": [
        "Continue your current wellness practices",
        "Share your positive habits with others",
        "Consider mentoring others in their wellness journey"
      ],
      "Good": [
        "Focus on maintaining your current routine",
        "Add one new wellness activity per week",
        "Connect with the community for support"
      ],
      "Fair": [
        "Start with small, manageable changes",
        "Try our guided meditation sessions",
        "Join our community for motivation"
      ],
      "Needs Attention": [
        "Consider speaking with a mental health professional",
        "Start with our beginner wellness tips",
        "Focus on establishing a daily routine"
      ],
      "Critical": [
        "Please seek professional mental health support",
        "Start with our crisis resources",
        "Consider reaching out to a helpline"
      ]
    };
    return recommendations[level] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (isCompleted) {
    const result = calculateScore();
    const recommendations = getRecommendations(result.level);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <Header />

        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Assessment Complete
              </h1>
              <p className="text-xl text-white/80">
                Here's your personalized MindEase report
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <div className={`${result.bg} ${result.border} border rounded-3xl p-8 text-center`}>
                <div className="text-6xl mb-4">📊</div>
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>
                  {result.level}
                </h2>
                <p className="text-white/80 text-lg">
                  Your MindEase score indicates {result.level.toLowerCase()} overall well-being.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Personalized Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl mb-3">💡</div>
                    <p className="text-white/80">{rec}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tips" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Explore Wellness Tips
                </Link>
                <Link to="/community" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Join Community
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const hasAnswered = answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Progress Bar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/60">Question {currentStep + 1} of {questions.length}</span>
              <span className="text-white/60">{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Question */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                {currentQuestion.question}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {currentQuestion.options.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      answers[currentQuestion.id] === option.value
                        ? 'bg-blue-500/20 border-blue-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-3xl mb-3">{option.emoji}</div>
                    <div className="font-semibold">{option.text}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!hasAnswered}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Assessment;
