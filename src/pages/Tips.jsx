
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Timer from '../components/Timer';
import Header from '../components/Header';
import Confetti from 'react-confetti';

function Exercises() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTip, setSelectedTip] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const categories = [
    { id: 'all', name: 'All Exercises', icon: '🌟' },
    { id: 'mindfulness', name: 'Mindfulness', icon: '🧘' },
    { id: 'stress', name: 'Stress Relief', icon: '😌' },
    { id: 'sleep', name: 'Sleep', icon: '😴' },
    { id: 'anxiety', name: 'Anxiety', icon: '😰' },
    { id: 'depression', name: 'Depression', icon: '😔' }
  ];

  const tips = [
    {
      id: 1,
      title: "5-Minute Breathing Exercise",
      description: "A simple breathing technique to calm your mind and reduce stress",
      category: "mindfulness",
      difficulty: "Easy",
      timeRequired: "5 minutes",
      icon: "🫁",
      instructions: "Find a comfortable position. Close your eyes and take slow, deep breaths. Inhale for 4 counts, hold for 4 counts, exhale for 4 counts. Focus only on your breath and let thoughts pass by like clouds.",
      duration: 300 // 5 minutes in seconds
    },
    {
      id: 2,
      title: "Progressive Muscle Relaxation",
      description: "Systematically tense and relax muscle groups to release physical tension",
      category: "stress",
      difficulty: "Easy",
      timeRequired: "10 minutes",
      icon: "💪",
      instructions: "Start with your toes and work up to your head. Tense each muscle group for 5 seconds, then relax for 10 seconds. Notice the difference between tension and relaxation.",
      duration: 600 // 10 minutes in seconds
    },
    {
      id: 3,
      title: "Mindful Walking",
      description: "Turn your daily walk into a mindfulness practice",
      category: "mindfulness",
      difficulty: "Medium",
      timeRequired: "15 minutes",
      icon: "🚶",
      instructions: "Walk slowly and deliberately. Feel each step, notice your surroundings, and focus on your breathing. If your mind wanders, gently bring it back to the present moment.",
      duration: 900 // 15 minutes in seconds
    },
    {
      id: 4,
      title: "Sleep Hygiene Routine",
      description: "Create a calming bedtime routine for better sleep",
      category: "sleep",
      difficulty: "Easy",
      timeRequired: "20 minutes",
      icon: "😴",
      instructions: "Dim the lights, avoid screens, and engage in calming activities like reading or gentle stretching. Create a consistent bedtime routine to signal your body it's time to sleep.",
      duration: 1200 // 20 minutes in seconds
    },
    {
      id: 5,
      title: "Anxiety Grounding Technique",
      description: "Use your senses to stay present and reduce anxiety",
      category: "anxiety",
      difficulty: "Easy",
      timeRequired: "3 minutes",
      icon: "🌍",
      instructions: "Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This helps bring you back to the present moment.",
      duration: 180 // 3 minutes in seconds
    },
    {
      id: 6,
      title: "Gratitude Practice",
      description: "Focus on positive aspects of your life to improve mood",
      category: "depression",
      difficulty: "Easy",
      timeRequired: "5 minutes",
      icon: "🙏",
      instructions: "Write down or think about 3 things you're grateful for today. They can be simple things like a warm cup of tea or a kind word from someone.",
      duration: 300 // 5 minutes in seconds
    }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  const handleTryTip = (tip) => {
    setSelectedTip(tip);
    setShowTimer(true);
  };

  const handleTimerComplete = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
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

  if (showTimer && selectedTip) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} recycle={false} />}
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <button
              onClick={() => setShowTimer(false)}
              className="text-white/60 hover:text-white transition-colors mb-4"
            >
              ← Back to Exercises
            </button>
            <h1 className="text-3xl font-bold text-white mb-2">{selectedTip.title}</h1>
            <p className="text-white/60">{selectedTip.description}</p>
          </motion.div>
          
          <Timer
            duration={selectedTip.duration}
            onComplete={handleTimerComplete}
            tipInstructions={selectedTip.instructions}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Daily Wellness <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Exercises</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Practical, actionable exercises to improve your MindEase. Try them with our guided timers.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tips Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map((tip) => (
              <motion.div
                key={tip.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{tip.icon}</div>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/60">
                    {tip.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tip.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {tip.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                  <span>⏱️ {tip.timeRequired}</span>
                  <span>📊 {tip.difficulty}</span>
                </div>
                
                <button 
                  onClick={() => handleTryTip(tip)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Try This Exercise
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Tip */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">⭐</div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Exercise of the Day: Mindful Breathing
                  </h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Take a moment to focus on your breath. This simple practice can help reduce stress, 
                    improve concentration, and bring you back to the present moment.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-white/60 mb-6">
                    <span>⏱️ 5 minutes</span>
                    <span>📊 Easy</span>
                    <span>🎯 All levels</span>
                  </div>
                  <button 
                    onClick={() => handleTryTip(tips[0])}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Try Now
                  </button>
                </div>
                <div className="bg-white/5 rounded-2xl p-8 text-center">
                  <div className="text-8xl mb-4">🧘</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Mindfulness</h4>
                  <p className="text-white/60 text-sm">
                    Practice being present in the moment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress Tracking */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Track Your Progress
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Complete exercises regularly to build healthy habits and see your MindEase improve over time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
                  <div className="text-white/60">Exercises Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">7</div>
                  <div className="text-white/60">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                  <div className="text-white/60">Wellness Score</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Exercises;
