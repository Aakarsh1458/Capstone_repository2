
import React from 'react';

function Tips() {
  const tips = [
    {
      id: 1,
      title: 'Practice Mindfulness',
      description: 'Take a few minutes each day to focus on your breath and be present in the moment. Mindfulness can help reduce stress and improve emotional well-being.'
    },
    {
      id: 2,
      title: 'Stay Connected',
      description: 'Reach out to friends or family members regularly. Social support is crucial for mental health.'
    },
    {
      id: 3,
      title: 'Get Enough Sleep',
      description: 'Aim for 7-9 hours of quality sleep each night. Good sleep is essential for emotional and physical health.'
    },
    {
      id: 4,
      title: 'Exercise Regularly',
      description: 'Physical activity releases endorphins and helps reduce anxiety and depression. Even a short walk can make a difference.'
    },
    {
      id: 5,
      title: 'Take Breaks',
      description: 'Give yourself permission to rest. Short breaks during study or work can boost productivity and reduce burnout.'
    },
    {
      id: 6,
      title: 'Limit Screen Time',
      description: 'Too much time on devices can increase stress. Try to unplug and spend time offline each day.'
    },
    {
      id: 7,
      title: 'Eat Well',
      description: 'A balanced diet supports both body and mind. Include fruits, vegetables, and whole grains in your meals.'
    },
    {
      id: 8,
      title: 'Ask for Help',
      description: 'If you’re feeling overwhelmed, don’t hesitate to talk to someone you trust or seek professional support.'
    },
    {
      id: 9,
      title: 'Set Realistic Goals',
      description: 'Break tasks into smaller steps and celebrate your progress. Setting achievable goals can boost confidence.'
    },
    {
      id: 10,
      title: 'Practice Gratitude',
      description: 'Take a moment each day to reflect on things you’re grateful for. Gratitude can improve your mood and outlook.'
    }
  ];

  return (
    <div>
      <style>{`
        .tips-container {
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

        .tips-container h1 {
          text-align: center;
          color: #4a90e2;
          margin-bottom: 1.5rem;
        }

        .tip-card {
          background: #e3f2fd;
          border-left: 5px solid #4a90e2;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          padding: 1.2rem 1rem 1rem 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          animation: fadeInSection 0.5s ease;
        }

        @keyframes fadeInSection {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .tip-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1976d2;
          margin-bottom: 0.4rem;
        }

        .tip-description {
          font-size: 1rem;
          color: #333;
        }
      `}</style>
      <div className="tips-container">
        <h1>🌱 Mental Health Tips</h1>
        {tips.map((tip) => (
          <div className="tip-card" key={tip.id}>
            <div className="tip-title">{tip.title}</div>
            <div className="tip-description">{tip.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
