import React from 'react';

function Resources() {
  return (
    <div>
      <style>{`
        .resources-container {
          font-family: 'Segoe UI', sans-serif;
          padding: 2rem;
          background-color: #f3faff;
          color: #333;
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .resources-header {
          text-align: center;
          background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
          padding: 3rem 1rem;
          border-radius: 10px;
          color: #fff;
          margin-bottom: 2rem;
          animation: zoomIn 1s ease-out;
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }

        .section {
          background-color: #ffffff;
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          opacity: 0;
          transform: translateY(40px);
          animation: slideUp 1s forwards;
        }

        .section:nth-child(2) { animation-delay: 0.2s; }
        .section:nth-child(3) { animation-delay: 0.4s; }
        .section:nth-child(4) { animation-delay: 0.6s; }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section h2 {
          margin-bottom: 0.8rem;
          color: #444;
        }

        .helplines li,
        .links li {
          margin-bottom: 0.5rem;
        }

        a {
          color: #0077cc;
          text-decoration: none;
          transition: color 0.3s, transform 0.3s;
        }

        a:hover {
          color: #0055aa;
          transform: translateX(4px);
        }

        iframe {
          border-radius: 10px;
          margin-top: 1rem;
          max-width: 100%;
        }
      `}</style>

      <div className="resources-container">
        <div className="resources-header">
          <h1>Mental Health Resources</h1>
          <p>Get help, learn more, and support your well-being</p>
        </div>

        <div className="section">
          <h2>📞 Helpline Numbers (India)</h2>
          <ul className="helplines">
            <li><strong>iCall:</strong> +91 9152987821</li>
            <li><strong>Vandrevala Foundation:</strong> 1860 266 2345 / 1800 233 3330</li>
            <li><strong>AASRA:</strong> +91-9820466726</li>
          </ul>
        </div>

        <div className="section">
          <h2>📚 Recommended Articles & Resources</h2>
          <ul className="links">
            <li><a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer">Mind UK - Mental Health Support</a></li>
            <li><a href="https://www.nimh.nih.gov/health/topics" target="_blank" rel="noopener noreferrer">NIMH - Mental Health Topics</a></li>
            <li><a href="https://www.who.int/teams/mental-health-and-substance-use" target="_blank" rel="noopener noreferrer">WHO Mental Health Resources</a></li>
          </ul>
        </div>

        <div className="section">
          <h2>🎥 Watch: How to Manage Stress</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/hnpQrMqDoqE"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Resources;

