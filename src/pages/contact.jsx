import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission (could use localStorage or just show a message)
    setSubmitted(true);
    // Optionally: localStorage.setItem('contactMessage', JSON.stringify(form));
  };

  if (submitted) {
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Thank you for reaching out! We have received your message.</p>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      <style>{`
        .contact-container {
          max-width: 400px;
          margin: 2rem auto;
          padding: 2rem;
          border-radius: 10px;
          background: #f9f9f9;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          font-weight: 500;
        }
        .contact-form input, .contact-form textarea {
          margin-top: 0.5rem;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .contact-form button {
          padding: 0.75rem;
          background: #4f8cff;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
        }
        .contact-form button:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
}

export default Contact;
