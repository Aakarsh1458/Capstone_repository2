import React from 'react';

function Home() {
  return (
    <div>
    <nav style={{ display: 'flex', gap: '2rem', justifyContent: 'center', margin: '2rem 0' }}>
      <a href="/about" style={{ textDecoration: 'none', color: '#4A90E2', fontWeight: 'bold' }}>About</a>
      <a href="/services" style={{ textDecoration: 'none', color: '#4A90E2', fontWeight: 'bold' }}>Services</a>
      <a href="/resources" style={{ textDecoration: 'none', color: '#4A90E2', fontWeight: 'bold' }}>Resources</a>
      <a href="/contact" style={{ textDecoration: 'none', color: '#4A90E2', fontWeight: 'bold' }}>Contact</a>
      <a href="/login" style={{ textDecoration: 'none', color: '#4A90E2', fontWeight: 'bold' }}>Login</a>
    </nav>
    <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Welcome to the Mental Wellness Portal</h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>
        Your journey to better mental health starts here.
      </p>
    </header>
    <section style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#4A90E2', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Our Services</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
        <li style={{ background: '#f7faff', margin: '1rem 0', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px #e3e3e3' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Personal Counseling</h3>
        <p style={{ margin: '0.5rem 0 0 0', color: '#555' }}>One-on-one sessions with certified counselors to support your mental health.</p>
        </li>
        <li style={{ background: '#f7faff', margin: '1rem 0', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px #e3e3e3' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Group Therapy</h3>
        <p style={{ margin: '0.5rem 0 0 0', color: '#555' }}>Join group sessions to share and heal together in a supportive environment.</p>
        </li>
        <li style={{ background: '#f7faff', margin: '1rem 0', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px #e3e3e3' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Self-Help Resources</h3>
        <p style={{ margin: '0.5rem 0 0 0', color: '#555' }}>Access articles, videos, and exercises to boost your mental wellness at your own pace.</p>
        </li>
        <li style={{ background: '#f7faff', margin: '1rem 0', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px #e3e3e3' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Crisis Support</h3>
        <p style={{ margin: '0.5rem 0 0 0', color: '#555' }}>Immediate help and resources for those in urgent need.</p>
        </li>
      </ul>
    </section>
      
    </div>
  );
}

export default Home;
