import React, { useState } from 'react';

function SelfAssessment() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, text: 'How often do you feel overwhelmed with studies?', options: ['Rarely', 'Sometimes', 'Often'] },
    { id: 2, text: 'How well are you sleeping lately?', options: ['Very well', 'Okay', 'Poorly'] },
    { id: 3, text: 'Do you feel supported by friends/family?', options: ['Yes', 'Somewhat', 'No'] },
    { id: 4, text: 'Do you find it hard to focus on tasks?', options: ['Not at all', 'Sometimes', 'Very often'] },
    { id: 5, text: 'Are you experiencing frequent headaches or fatigue?', options: ['No', 'Occasionally', 'Yes'] },
    { id: 6, text: 'How often do you take breaks while studying?', options: ['Regularly', 'Sometimes', 'Rarely'] },
    { id: 7, text: 'Do you engage in physical activity?', options: ['Often', 'Sometimes', 'Never'] },
    { id: 8, text: 'How is your appetite recently?', options: ['Normal', 'Fluctuating', 'Lost'] },
    { id: 9, text: 'Do you feel anxious or panicked without clear reason?', options: ['No', 'Sometimes', 'Frequently'] },
    { id: 10, text: 'Do you feel motivated to achieve your goals?', options: ['Yes', 'Sometimes', 'No'] }
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
    if (score <= 5) return "😊 You're doing great! Keep caring for yourself.";
    if (score <= 12) return "😌 Mild stress. Take breaks, sleep well, and stay balanced.";
    return "⚠️ High stress. Please talk to someone or seek guidance.";
  };

  return (
    <div>
      <style>{`
        .quiz-container {
          font-family: 'Segoe UI', sans-serif;
          max-width: 700px;
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
        }

        .question {
          margin-bottom: 2rem;
          animation: fadeInSection 0.5s ease;
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
          animation: popIn 0.6s ease;
        }

        @keyframes popIn {
          from { transform: scale(0.95); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="quiz-container">
        <h1>🧘 Stress Self-Assessment</h1>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {questions.map((q, idx) => (
              <div className="question" key={q.id}>
                <p>{`${q.id}. ${q.text}`}</p>
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

export default SelfAssessment;
