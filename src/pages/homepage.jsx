import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "Smart Assessment",
      description: "AI-powered MindEase evaluation with personalized insights",
      path: "/assessment",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "👥",
      title: "Community Hub",
      description: "Connect with like-minded individuals in a supportive environment",
      path: "/community",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📚",
      title: "Resource Library",
      description: "Curated collection of wellness tools and educational content",
      path: "/resources",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "💡",
      title: "Wellness Tips",
      description: "Daily actionable tips for better mental health and well-being",
      path: "/tips",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Daily Assessments" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Welcome Message */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-white/80">
              Welcome back, {user.username}
            </h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mental Health
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover a revolutionary platform that combines AI-powered assessments, community support, and personalized resources for your mental well-being journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Your Assessment
            </Link>
            <Link to="/community" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Join Community
            </Link>
          </div>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="text-white/60">Current Time</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mental Health
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need to take control of your mental health journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 mb-4">{feature.description}</p>
              <Link to={feature.path} className="text-blue-400 hover:text-blue-300 transition-colors">
                Explore →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Wellness Check
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Take a moment to assess your current mental state with our quick wellness questionnaire.
          </p>
          <Link to="/assessment" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Start Quick Assessment
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/5 backdrop-blur-md border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                  M
                </div>
                <span className="text-lg font-bold text-white">MindEase</span>
              </div>
              <p className="text-white/60">
                Empowering Mental Health through technology and community.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/assessment" className="text-white/60 hover:text-white transition-colors">Assessment</Link></li>
                <li><Link to="/community" className="text-white/60 hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/resources" className="text-white/60 hover:text-white transition-colors">Resources</Link></li>
                <li><Link to="/tips" className="text-white/60 hover:text-white transition-colors">Tips</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/login" className="text-white/60 hover:text-white transition-colors">Login</Link></li>
                <li><Link to="/register" className="text-white/60 hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 MindEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
