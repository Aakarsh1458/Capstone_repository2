import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home(){
  const pages = [
  { name: 'Assessment', path: '/Assessment', desc: 'Go to the Assessment page' },
  { name: 'Community', path: '/community', desc: 'Join the Community page' },
  { name: 'Contact', path: '/contact', desc: 'Reach out via Contact page' },
  { name: 'Resources', path: '/Resources', desc: 'Access the Resources page' },
  { name: 'Tips', path: '/tips', desc: 'Read helpful Tips for wellness' },
  { name: 'Login', path: '/login', desc: 'Access your account' },
  { name: 'Register', path: '/register', desc: 'Create a new account' },
  { name: 'Blogs', path: '/blogs', desc: 'Explore mental health blogs' },
  { name: 'FAQs', path: '/faqs', desc: 'Commonly asked questions' },
  { name: 'About', path: '/about', desc: 'Learn more about us' }, // ✅ Added this line
];



    // Dynamically import all files in the pages folder (except homepage.jsx)
   

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Segoe UI, sans-serif',
                padding: '0 20px',
            }}
        >
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '0.5em',
                    letterSpacing: '2px',
                    textShadow: '0 2px 8px #fff8',
                }}
            >
                Welcome to the Mental Wellness Portal
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                    fontSize: '1.5rem',
                    color: '#555',
                    marginBottom: '2em',
                    maxWidth: '600px',
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.7)',
                    borderRadius: '12px',
                    padding: '1em 2em',
                    boxShadow: '0 4px 24px #0001',
                }}
            >
                Your journey to better mental health starts here. Explore resources, connect with professionals, and join a supportive community.
            </motion.p>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { staggerChildren: 0.15 },
                    },
                }}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2em',
                    justifyContent: 'center',
                    marginBottom: '3em',
                }}
            >
                {pages.map((page, idx) => (
                    <motion.div
                        key={page.path}
                        whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #0002' }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        style={{
                            background: 'rgba(255,255,255,0.9)',
                            borderRadius: '16px',
                            padding: '1.5em 2.5em',
                            minWidth: '220px',
                            boxShadow: '0 2px 12px #0001',
                            textAlign: 'center',
                            cursor: 'pointer',
                            border: '2px solid #e0e0e0',
                        }}
                    >
                        <Link
                            to={page.path}
                            style={{
                                textDecoration: 'none',
                                color: '#2d6a4f',
                                fontWeight: 600,
                                fontSize: '1.3rem',
                                letterSpacing: '1px',
                                display: 'block',
                                marginBottom: '0.5em',
                            }}
                        >
                            {page.name}
                        </Link>
                        <span style={{ color: '#555', fontSize: '1rem' }}>{page.desc}</span>
                    </motion.div>
                ))}
            </motion.div>
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{
                    color: '#888',
                    fontSize: '1rem',
                    marginTop: 'auto',
                    padding: '1em 0',
                }}
            >
                &copy; {new Date().getFullYear()} Mental Wellness Portal. All rights reserved.
            </motion.footer>
        </div>
    );
}

export default Home;
