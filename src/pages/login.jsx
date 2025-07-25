import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const darkBeige = '#e0d3b8';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login (replace with real backend call)
    const user = JSON.parse(localStorage.getItem('userDetails'));
    if (user && user.email === form.email && user.password === form.password) {
      setSuccess(true);
      setError('');
    } else {
      setError('Invalid email or password.');
      setSuccess(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'anticipate' }}
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        background: darkBeige,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Segoe UI, sans-serif',
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: 0,
        backgroundImage: 'url("/path/to/your/background-image.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navigation Bar (copied from homepage) */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        style={{
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.7em 2em',
          background: darkBeige,
          boxShadow: '0 1px 8px #b7c7a322',
          borderBottom: '1px solid #b7c7a355',
          position: 'relative',
          zIndex: 10,
          margin: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2em', minWidth: 0, flex: '0 0 auto' }}>
          <motion.img
            src={'C:/Users/aakar/mental-wellness-portal/src/pages/capstone1.jpg'}
            alt="M"
            whileHover={{ scale: 1.06, rotate: 3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.location.pathname = '/'}
            style={{
              height: '60px',
              width: 'auto',
              borderRadius: '10px',
              boxShadow: '0 1px 6px #b7c7a322',
              cursor: 'pointer',
              background: 'transparent',
              transition: 'box-shadow 0.2s',
              marginRight: '0.7em',
            }}
          />
          <span
            className="logo-text"
            style={{
              fontFamily: "'Nunito', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '2.4rem',
              color: '#c8a97e',
              letterSpacing: '0.5px',
              lineHeight: 1.1,
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            MindEase
          </span>
        </div>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1em',
          marginLeft: '2.5em',
          flex: '1 1 auto',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}>
          <Link to="/" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>Home</Link>
          <Link to="/about" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>About</Link>
          <Link to="/blogs" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>Blogs</Link>
          <Link to="/faqs" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>FAQs</Link>
          <Link to="/assessment" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>Assessment</Link>
          <Link to="/community" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>Community</Link>
          <Link to="/tips" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>Tips</Link>
          <Link to="/resources" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', marginRight: '1em' }}>Resources</Link>
          <Link to="/login" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.5px', marginRight: '1em' }}>Login</Link>
          <Link to="/register" style={{ color: '#6b8a4c', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.5px' }}>Register</Link>
        </nav>
      </motion.div>
      {/* Login Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 60 }}
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          maxWidth: '600px',
          margin: '4em auto 0 auto',
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          minHeight: '420px',
          gap: '2.5em',
        }}
      >
        <form onSubmit={handleSubmit} style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 2px 16px #b7c7a322',
          padding: '2.5em 2.5em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '320px',
          width: '100%',
          maxWidth: '520px',
        }}>
          <h2 style={{ color: '#6b8a4c', marginBottom: '1.5em' }}>Login</h2>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ marginBottom: '1em', padding: '0.7em', borderRadius: '8px', border: '1px solid #b7c7a355', width: '100%' }} />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ marginBottom: '1em', padding: '0.7em', borderRadius: '8px', border: '1px solid #b7c7a355', width: '100%' }} />
          <motion.button
            whileHover={{ scale: 1.06, backgroundColor: '#6b8a4c', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            style={{
              background: '#e7ecd9',
              color: '#6b8a4c',
              border: 'none',
              borderRadius: '8px',
              padding: '0.7em 1.5em',
              fontWeight: 700,
              fontSize: '1.08rem',
              boxShadow: '0 1px 6px #b7c7a222',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
              marginTop: '0.2em',
              letterSpacing: '0.5px',
            }}
          >
            Login
          </motion.button>
          {error && <p style={{ color: 'red', marginTop: '1em' }}>{error}</p>}
          {success && <p style={{ color: '#6b8a4c', marginTop: '1em' }}>Login successful!</p>}
        </form>
      </motion.div>
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          color: '#6b8a4c',
          fontSize: '1rem',
          marginTop: 'auto',
          padding: '1em 0',
          width: '100vw',
          background: darkBeige,
          textAlign: 'center',
          borderTop: '1px solid #b7c7a355',
        }}
      >
        &copy; {new Date().getFullYear()} Mental Wellness Portal. All rights reserved.
      </motion.footer>
    </motion.div>
  );
}

export default Login;
