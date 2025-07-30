import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);

  const getFirstName = (username) => {
    if (!username) return '';
    const first = username.split(/\s|\./)[0];
    return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 mx-4 mt-4 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MindEase
              </span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
            <nav className="flex items-center gap-8 px-6 py-4">
              <Link
                to="/assessment"
                className="text-white/60 hover:text-white font-semibold transition-colors"
                style={{ userSelect: 'none' }}
              >
                Assessment
              </Link>
            </nav>
            {user ? (
              <div className="flex-1 flex justify-center">
                <span className="text-white/80 text-lg font-semibold text-center block">Welcome, {getFirstName(user.username)}!</span>
                <button 
                  onClick={handleLogout}
                  className="ml-6 text-white/80 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-white/80 hover:text-white transition-colors">Login</Link>
                <Link to="/register" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Header;