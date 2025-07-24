import React from "react";

const Homepage = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Welcome to the Mental Wellness Portal</h1>
            <p className="homepage-description">
                Your journey to better mental health starts here.
            </p>
            {/* Add more content here */}
            <style>{`
                .homepage-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: #f0f4f8;
                }
                .homepage-title {
                    font-size: 2.5rem;
                    color: #2e3a59;
                    margin-bottom: 1rem;
                }
                .homepage-description {
                    font-size: 1.2rem;
                    color: #4a5568;
                }
            `}</style>
        </div>
    );
};

export default Homepage;