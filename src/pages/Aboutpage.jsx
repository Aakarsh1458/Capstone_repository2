import React from 'react';

function Aboutpage() {
return (
    <div>
        <style>{`
            .about-container {
                font-family: 'Segoe UI', sans-serif;
                padding: 2rem;
                background: #f5faff;
                color: #333;
            }

            .about-header {
                text-align: center;
                background: linear-gradient(135deg, #89f7fe, #66a6ff);
                color: white;
                padding: 3rem 1rem;
                border-radius: 10px;
                margin-bottom: 2rem;
            }

            .about-header h1 {
                margin-bottom: 1rem;
                font-size: 2.5rem;
            }

            .about-section {
                margin-bottom: 2rem;
                background: #ffffff;
                padding: 1.5rem;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            }

            .about-section h2 {
                color: #444;
                margin-bottom: 0.8rem;
            }

            .about-section ul {
                list-style: disc inside;
            }

            .highlight {
                color: #66a6ff;
                font-weight: bold;
            }

            .about-section a {
                color: #66a6ff;
                text-decoration: underline;
            }
        `}</style>

        <div className="about-container">
            <div className="about-header">
                <h1>About the Mental Wellness Portal</h1>
                <p>Empowering students through tools, resources, and emotional support</p>
            </div>

            <div className="about-section">
                <h2>🌱 Our Mission</h2>
                <p>
                    To promote mental wellness among students by providing interactive, accessible, and engaging support through modern technology.
                </p>
            </div>

            <div className="about-section">
                <h2>🔍 What's Inside?</h2>
                <ul>
                    <li>
                        <span className="highlight">
                            <a href="/stress-check-quiz">Stress Check Quiz</a>
                        </span>: Helps students self-evaluate stress levels.
                    </li>
                    <li>
                        <span className="highlight">
                            <a href="/breathing-timer">Breathing Timer</a>
                        </span>: A calming guide using React Hooks.
                    </li>
                    <li>
                        <span className="highlight">
                            <a href="/wellness-tips-cards">Wellness Tips Cards</a>
                        </span>: Actionable daily mental health tips.
                    </li>
                    <li>
                        <span className="highlight">
                            <a href="/resources-links">Resources & Links</a>
                        </span>: Curated helplines, articles, and videos.
                    </li>
                    <li>
                        <span className="highlight">
                            <a href="/feedback-form">Feedback Form</a>
                        </span>: Collects suggestions from users.
                    </li>
                    <li>
                        <span className="highlight">
                            <a href="/login-registration">Login & Registration</a>
                        </span>: Stores credentials locally (simulated).
                    </li>
                    <li>
                        <span className="highlight">
                            <a href="/multimedia-embeds">Multimedia Embeds</a>
                        </span>: Visual content to enrich the experience.
                    </li>
                </ul>
            </div>

            <div className="about-section">
                <h2>🛠 Technologies Used</h2>
                <p>
                    React, JavaScript, HTML, CSS, React Hooks, React Router DOM, LocalStorage, FontAwesome, and responsive design with Flexbox and Media Queries.
                </p>
            </div>

            <div className="about-section">
                <h2>🌐 Hosting & Documentation</h2>
                <p>
                    The site is hosted on GitHub Pages or Netlify, with documentation created using Markdown and final presentation slides via Canva or Google Slides.
                </p>
            </div>
        </div>
    </div>
);
}

export default Aboutpage;
