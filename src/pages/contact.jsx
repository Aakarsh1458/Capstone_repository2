import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { contactAPI } from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactAPI.submit(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      // handle error (show error message if needed)
    } finally {
      setIsSubmitting(false);
    }
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

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get in touch with our support team",
      contact: "support@mindease.com",
      response: "Within 24 hours"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our wellness experts",
      contact: "Available 9AM-6PM EST",
      response: "Real-time support"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "Mon-Fri 9AM-6PM EST"
    }
  ];

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
              Get in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have questions, feedback, or need support? We're here to help you on your MindEase journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-white/80 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{method.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                            <p className="text-white/70 mb-3">{method.description}</p>
                            <div className="text-blue-400 font-semibold">{method.contact}</div>
                            <div className="text-white/60 text-sm mt-1">Response: {method.response}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-4">
                      <h4 className="text-white font-semibold mb-2">How do I get started with MindEase?</h4>
                      <p className="text-white/70 text-sm">
                        Simply create an account and take our assessment to get personalized recommendations for your MindEase journey.
                      </p>
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <h4 className="text-white font-semibold mb-2">Is my data secure and private?</h4>
                      <p className="text-white/70 text-sm">
                        Yes, we take your privacy seriously. All data is encrypted and stored securely following HIPAA guidelines.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h4>
                      <p className="text-white/70 text-sm">
                        Absolutely! You can cancel your subscription at any time with no questions asked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Office Hours */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl mb-3">🌅</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Monday - Friday</h3>
                  <p className="text-white/60">9:00 AM - 6:00 PM EST</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">🌇</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Saturday</h3>
                  <p className="text-white/60">10:00 AM - 4:00 PM EST</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">🌙</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sunday</h3>
                  <p className="text-white/60">Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
