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
   

    const servicesList = [
        { name: 'Therapy Sessions', desc: 'Connect with licensed therapists for 1:1 or group sessions.' },
        { name: 'Mood Tracking', desc: 'Track your mood and progress over time.' },
        { name: 'Mindfulness Exercises', desc: 'Guided meditations and breathing exercises.' },
        { name: 'Self-Help Library', desc: 'Access articles, videos, and self-care guides.' },
        { name: 'Crisis Support', desc: 'Immediate help and resources for urgent needs.' },
    ];

    const navPages = [
        { name: 'About', path: '/about' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'FAQs', path: '/faqs' },
    ];

    const servicesNav = [
        { name: 'Assessment', path: '/Assessment' },
        { name: 'Community', path: '/community' },
        { name: 'Tips', path: '/tips' },
        { name: 'Resources', path: '/Resources' },
    ];

    const loginRegister = [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
    ];

    const [servicesOpen, setServicesOpen] = React.useState(false);

    // Define a darker beige
    const darkBeige = '#e0d3b8';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "anticipate" }}
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
            {/* Top Navigation Bar */}
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 12 }}
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
                {/* Logo and Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2em', minWidth: 0 }}>
                    {/* LOGO START */}
                    <motion.img
                        src={'https://eu-central.storage.cloudconvert.com/tasks/e37b43c7-e502-4ac7-9a46-9c837434c5ff/capstone1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20250724%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20250724T144002Z&X-Amz-Expires=86400&X-Amz-Signature=1796291d3795536b7ef257308b1a90bf752c8e0cbbcbab16b30dd55e060c826d&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22capstone1.png%22&response-content-type=image%2Fpng&x-id=GetObject'}
                        alt="Mental Wellness Portal Logo"
                        whileHover={{ scale: 1.06, rotate: 3 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => window.location.pathname = '/'}
                        style={{
                            height: '60px', // Increased size
                            width: 'auto',
                            borderRadius: '10px',
                            boxShadow: '0 1px 6px #b7c7a322',
                            cursor: 'pointer',
                            background: 'transparent',
                            transition: 'box-shadow 0.2s',
                            marginRight: '0.7em',
                        }}
                    />
                    {/* LOGO END */}
                    {/* Title */}
                    <span
                        className="logo-text"
                        style={{
                            fontFamily: "'Nunito', 'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: '2.4rem', // Bigger than rest of page
                            color: '#c8a97e',
                            letterSpacing: '0.5px',
                            lineHeight: 1.1,
                            whiteSpace: 'nowrap',
                            userSelect: 'none',
                        }}
                    >
                        Mental Wellness Portal
                    </span>
                </div>
                {/* Navigation Bar */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5em' }}>
                    {navPages.map((page) => (
                        <motion.div
                            key={page.path}
                            whileHover={{ scale: 1.06, background: "#b7c7a322" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                borderRadius: '7px',
                                padding: '0.4em 0.9em',
                                transition: 'background 0.2s',
                            }}
                        >
                            <Link
                                to={page.path}
                                style={{
                                    color: '#6b8a4c',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '1.05rem',
                                }}
                            >
                                {page.name}
                            </Link>
                        </motion.div>
                    ))}
                    {servicesNav.map((item) => (
                        <motion.div
                            key={item.path}
                            whileHover={{ scale: 1.06, background: "#b7c7a322" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                borderRadius: '7px',
                                padding: '0.4em 0.9em',
                                transition: 'background 0.2s',
                            }}
                        >
                            <Link
                                to={item.path}
                                style={{
                                    color: '#6b8a4c',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '1.05rem',
                                }}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                    {/* Add another link to Assessment.jsx */}
                    <motion.div
                        whileHover={{ scale: 1.06, background: "#b7c7a322" }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            borderRadius: '7px',
                            padding: '0.4em 0.9em',
                            transition: 'background 0.2s',
                        }}
                    >
                        <Link
                            to="/Assessment"
                            style={{
                                color: '#6b8a4c',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1.05rem',
                            }}
                        >
                            Assessment
                        </Link>
                    </motion.div>
                    <div style={{ width: '1.5em' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}>
                        {loginRegister.map((item) => (
                            <motion.div
                                key={item.path}
                                whileHover={{ scale: 1.08, background: "#b7c7a322" }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    borderRadius: '7px',
                                    padding: '0.4em 0.9em',
                                    transition: 'background 0.2s',
                                }}
                            >
                                <Link
                                    to={item.path}
                                    style={{
                                        color: '#6b8a4c',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        fontSize: '1.05rem',
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </nav>
            </motion.div>
            {/* Main Content: Two-column layout */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60 }}
                style={{
                    display: 'flex',
                    flex: 1,
                    width: '100%',
                    maxWidth: '1100px',
                    margin: '4em auto 0 auto',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    position: 'relative',
                    minHeight: '420px',
                    gap: '2.5em',
                }}
            >
                {/* Assessment Section - Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 2px 12px #b7c7a222',
                        padding: '1.5em 2em',
                        minWidth: '340px',
                        maxWidth: '380px',
                        width: '100%',
                        marginTop: 0,
                        position: 'relative',
                        left: 0,
                        top: 0,
                    }}
                >
                    {/* Assessment Image */}
                    <img
                        src="https://imgs.search.brave.com/4BMz4ui2Jz6oxH3Oq7A2ukfJDeREnpJt7ckw2l5IhBs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTA1/MzkzNjQwL3N0b2Nr/LXBob3RvLWh1bWFu/LWhlYWQtc2lsaG91/ZXR0ZS1tZW50YWwt/aGVhbHRoLXN5bWJv/bC1wdXp6bGU"
                        alt="Assessment Illustration"
                        style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            boxShadow: '0 1px 6px #b7c7a222',
                            background: '#e7ecd9',
                        }}
                    />
                    {/* Assessment Text and Button */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1.2em' }}>
                        <span
                            style={{
                                fontSize: '1.18rem',
                                color: '#6b8a4c',
                                fontWeight: 600,
                                marginBottom: '0.7em',
                                letterSpacing: '0.2px',
                            }}
                        >
                            Analyse your mental wellness level now!
                        </span>
                        <Link to="/Assessment" style={{ textDecoration: 'none', width: 'fit-content' }}>
                            <motion.button
                                whileHover={{ scale: 1.06, backgroundColor: '#6b8a4c', color: '#fff' }}
                                whileTap={{ scale: 0.97 }}
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
                                Take Now
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
                {/* Main Text Section - Right */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
                    style={{
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
                        marginLeft: 'auto',
                    }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        style={{
                            fontSize: '1.25rem',
                            color: '#6b8a4c',
                            marginBottom: '1.5em',
                            maxWidth: '480px',
                            textAlign: 'center',
                            background: darkBeige,
                            borderRadius: '12px',
                            padding: '1.2em 1.5em',
                            boxShadow: '0 1px 8px #b7c7a322',
                        }}
                    >
                        Your journey to better mental health starts here. Explore resources, connect with professionals, and join a supportive community.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 1.1, type: "spring", stiffness: 60 }}
                        style={{
                            background: '#e7ecd9',
                            borderRadius: '14px',
                            boxShadow: '0 2px 12px #b7c7a322',
                            padding: '1.1em 1.5em',
                            marginTop: '1.2em',
                            textAlign: 'center',
                            color: '#6b8a4c',
                            fontWeight: 500,
                            fontSize: '1.08rem',
                            letterSpacing: '0.3px',
                            maxWidth: '340px',
                        }}
                    >
                        <motion.span
                            initial={{ scale: 0.9, rotate: -8 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 120, delay: 1.3 }}
                            style={{
                                display: 'inline-block',
                                marginRight: '0.4em',
                                fontSize: '1.3em',
                            }}
                            role="img"
                            aria-label="warm sun"
                        >
                            ☀️
                        </motion.span>
                        Remember: Every step you take matters. You're not alone on this journey!
                    </motion.div>
                </motion.div>
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

export default Home;
