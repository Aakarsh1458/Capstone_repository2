import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

function About() {
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
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MindEase</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're dedicated to revolutionizing MindEase through innovative technology and compassionate care.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                MindEase was created with a simple yet powerful mission: to make MindEase accessible, 
                personalized, and effective for everyone. We believe that mental health is just as important as 
                physical health, and everyone deserves access to the tools and support they need to thrive.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Through our AI-powered assessments, supportive community, and evidence-based resources, 
                we're building a future where MindEase is prioritized, understood, and achievable for all.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-white mb-3">Compassion</h3>
                <p className="text-white/70">
                  We approach mental health with empathy, understanding, and genuine care for every individual's journey.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-white mb-3">Evidence-Based</h3>
                <p className="text-white/70">
                  Our approach is grounded in scientific research and proven methodologies for MindEase.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Privacy</h3>
                <p className="text-white/70">
                  Your mental health journey is personal, and we're committed to protecting your privacy and data.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technology Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Technology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Assessments</h3>
                  <p className="text-white/80 leading-relaxed">
                    Our advanced AI algorithms provide personalized MindEase evaluations, 
                    offering insights and recommendations tailored to your unique needs and circumstances.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Community Support</h3>
                  <p className="text-white/80 leading-relaxed">
                    Connect with others on similar wellness journeys in a safe, supportive environment 
                    where you can share experiences and find encouragement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Ready to take the first step towards better MindEase? 
                Start your journey with MindEase today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/assessment" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Start Assessment
                </a>
                <a href="/register" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
