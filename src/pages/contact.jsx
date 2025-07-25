import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Optionally: localStorage.setItem('contactMessage', JSON.stringify(form));
  };

  return (
    <div className="contact-main contact-main-centered">
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="success-box">
          <h2>Thank you!</h2>
          <p>Your message has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form-db">
          <div className="form-row">
            <label htmlFor="name">Name <span className="db-type">(varchar)</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email <span className="db-type">(varchar)</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message <span className="db-type">(text)</span></label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
      <style>{`
        .contact-main.contact-main-centered {
          max-width: 480px;
          margin: 3rem auto 0 auto;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          padding: 2.5rem 2.5rem 2rem 2.5rem;
          border: 1px solid #e3e8ee;
        }
        .contact-main h1 {
          margin-bottom: 1.7rem;
          color: #2563eb;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: 0.5px;
        }
        .contact-form-db {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .form-row {
          display: flex;
          flex-direction: column;
        }
        .form-row label {
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: #22223b;
          font-size: 1.05rem;
        }
        .db-type {
          font-size: 0.85em;
          color: #6b7280;
          margin-left: 0.5em;
        }
        .contact-form-db input, .contact-form-db textarea {
          padding: 0.65rem;
          border: 1px solid #bfc9d9;
          border-radius: 6px;
          font-size: 1rem;
          background: #f8fafc;
          transition: border 0.2s;
        }
        .contact-form-db input:focus, .contact-form-db textarea:focus {
          border: 1.5px solid #2563eb;
          outline: none;
        }
        .contact-form-db textarea {
          min-height: 90px;
          resize: vertical;
        }
        .contact-form-db button {
          align-self: flex-start;
          padding: 0.7rem 1.7rem;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 1.08rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 0.7rem;
          box-shadow: 0 2px 8px rgba(37,99,235,0.08);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .contact-form-db button:hover {
          background: #1746a2;
          box-shadow: 0 4px 16px rgba(37,99,235,0.13);
        }
        .success-box {
          background: #e0f7e9;
          border: 1px solid #34d399;
          border-radius: 10px;
          padding: 2.2rem 1.5rem;
          text-align: center;
          color: #065f46;
          font-size: 1.15rem;
          box-shadow: 0 2px 8px rgba(52,211,153,0.08);
        }
        @media (max-width: 600px) {
          .contact-main.contact-main-centered {
            padding: 1rem 0.5rem;
          }
          .contact-main h1 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
