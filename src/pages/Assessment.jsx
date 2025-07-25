import React, { useState } from 'react';
// Uncomment the lines below if you want to add a Lottie animated character
// import Lottie from 'lottie-react';
// import relaxAnimation from './animations/relax.json'; // place your JSON file in src/animations/

function Assessment() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      text: 'How often do you feel overwhelmed with studies?',
      options: ['Rarely', 'Sometimes', 'Often']
    },
    {
      id: 2,
      text: 'How well are you sleeping lately?',
      options: ['Very well', 'Okay', 'Poorly']
    },
    {
      id: 3,
      text: 'Do you feel supported by friends/family?',
      options: ['Yes', 'Somewhat', 'No']
    }
  ];

  const handleChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let calculatedScore = 0;
    for (const q of questions) {
      const response = answers[q.id];
      if (response === q.options[2]) calculatedScore += 2;
      else if (response === q.options[1]) calculatedScore += 1;
    }
    setScore(calculatedScore);
    setSubmitted(true);
  };

  const getResultMessage = () => {
    if (score <= 1) return "😊 You're doing well. Keep it up!";
    if (score <= 3) return "😌 Mild stress detected. Take time to relax.";
    return "⚠️ High stress. Consider seeking help or speaking to someone.";
  };

  return (
    <div>
      <style>{`
        .quiz-container {
          font-family: 'Segoe UI', sans-serif;
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: #f9faff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          animation: fadeIn 0.8s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .quiz-container h1 {
          text-align: center;
          color: #4a90e2;
          margin-bottom: 1.5rem;
          animation: slideDown 0.8s ease-in;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .question {
          margin-bottom: 2rem;
          animation: fadeInSection 1s ease forwards;
        }

        @keyframes fadeInSection {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .question p {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        label {
          display: block;
          margin: 0.3rem 0;
          transition: all 0.3s ease;
        }

        input[type="radio"]:hover + label,
        label:hover {
          color: #4a90e2;
          cursor: pointer;
        }

        .submit-btn {
          background: linear-gradient(to right, #4a90e2, #6fcf97);
          color: white;
          padding: 0.8rem 1.6rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .submit-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .result {
          margin-top: 2rem;
          font-size: 1.2rem;
          font-weight: 500;
          text-align: center;
          padding: 1rem;
          background: #e0f7fa;
          border-left: 5px solid #00acc1;
          border-radius: 6px;
          animation: bounceIn 0.8s ease;
        }

        @keyframes bounceIn {
          0%   { transform: scale(0.8); opacity: 0; }
          60%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }

        .character {
          width: 160px;
          margin: 0 auto 1rem;
        }
      `}</style>

      <div className="quiz-container">
        {/* Uncomment to show animated character using Lottie */}
        {/* <div className="character">
          <Lottie animationData={relaxAnimation} loop={true} />
        </div> */}

        <h1>🧘 Stress Self-Assessment</h1>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {questions.map((q, idx) => (
              <div className="question" key={q.id} style={{ animationDelay: `${idx * 0.2}s` }}>
                <p>{q.text}</p>
                {q.options.map((opt) => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      onChange={() => handleChange(q.id, opt)}
                      required
                    />
                    {' '}{opt}
                  </label>
                ))}
              </div>
            ))}
            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="submit-btn">Check My Score</button>
            </div>
          </form>
        ) : (
          <div className="result">{getResultMessage()}</div>
        )}
      </div>
    </div>
  );
}

export default Assessment;

