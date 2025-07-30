import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { newsletterAPI } from '../services/api';

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState(null);

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'articles', name: 'Articles', icon: '📖' },
    { id: 'videos', name: 'Videos', icon: '🎥' },
    { id: 'podcasts', name: 'Podcasts', icon: '🎧' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
    { id: 'apps', name: 'Apps', icon: '📱' }
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Complete Guide",
      description: "Comprehensive guide to understanding anxiety, its causes, and coping strategies.",
      category: "articles",
      type: "Article",
      duration: "15 min read",
      difficulty: "Beginner",
      image: "📖"
    },
    {
      id: 2,
      title: "Mindfulness Meditation for Beginners",
      description: "Step-by-step guide to start your mindfulness meditation practice.",
      category: "videos",
      type: "Video",
      duration: "20 min",
      difficulty: "Beginner",
      image: "🎥"
    },
    {
      id: 3,
      title: "The Science of Sleep",
      description: "Learn about sleep cycles and how to improve your sleep quality.",
      category: "articles",
      type: "Article",
      duration: "10 min read",
      difficulty: "Intermediate",
      image: "📖"
    },
    {
      id: 4,
      title: "Stress Management Techniques",
      description: "Practical techniques to manage stress in daily life.",
      category: "videos",
      type: "Video",
      duration: "30 min",
      difficulty: "Beginner",
      image: "🎥"
    },
    {
      id: 5,
      title: "Mental Health Podcast Series",
      description: "Weekly episodes covering various mental health topics.",
      category: "podcasts",
      type: "Podcast",
      duration: "45 min",
      difficulty: "All Levels",
      image: "🎧"
    },
    {
      id: 6,
      title: "Breathing Exercise Tool",
      description: "Interactive tool to practice deep breathing exercises.",
      category: "tools",
      type: "Tool",
      duration: "5 min",
      difficulty: "Beginner",
      image: "🛠️"
    },
    {
      id: 7,
      title: "Mood Tracking App Guide",
      description: "How to use mood tracking apps for better mental health awareness.",
      category: "apps",
      type: "Guide",
      duration: "8 min read",
      difficulty: "Beginner",
      image: "📱"
    },
    {
      id: 8,
      title: "Building Resilience",
      description: "Strategies to build mental resilience and emotional strength.",
      category: "articles",
      type: "Article",
      duration: "12 min read",
      difficulty: "Intermediate",
      image: "📖"
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

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

  const handleSubscribe = async () => {
    setSubStatus(null);
    try {
      await newsletterAPI.subscribe(email);
      setSubStatus('success');
      setEmail('');
    } catch (err) {
      setSubStatus('error');
    }
  };

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
              MindEase <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Curated collection of articles, videos, tools, and resources to support your MindEase journey.
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

          {/* Resources Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{resource.image}</div>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/60">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                  <span>{resource.duration}</span>
                  <span>{resource.difficulty}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Access Resource
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Featured Resource
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    "The Complete Guide to MindEase"
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Our comprehensive guide covers everything from understanding mental health basics to advanced 
                    techniques for maintaining wellness. Perfect for beginners and those looking to deepen their knowledge.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-white/60 mb-6">
                    <span>📖 Article</span>
                    <span>⏱️ 25 min read</span>
                    <span>🎯 All Levels</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Read Now
                  </button>
                </div>
                <div className="bg-white/5 rounded-2xl p-8 text-center">
                  <div className="text-8xl mb-4">📚</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Premium Content</h4>
                  <p className="text-white/60 text-sm">
                    Get access to exclusive resources and expert insights
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest MindEase resources, tips, and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleSubscribe}
                  disabled={!email}
                >
                  Subscribe
                </button>
              </div>
              {subStatus === 'success' && (
                <div className="text-green-400 mt-4">Thank you for subscribing to MindEase!</div>
              )}
              {subStatus === 'error' && (
                <div className="text-red-400 mt-4">There was an error. Please try again.</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Resources;

