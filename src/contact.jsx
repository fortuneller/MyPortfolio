import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate(); // ✅ Initialize useNavigate()

  // ✅ Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    alert('Message sent successfully! Redirecting to Home...');
    navigate('/'); // ✅ Redirect to Home page
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: cancankat@example.com</p>
      <p>LinkedIn: linkedin.com/in/cancankat</p>
      
      <form onSubmit={handleSubmit}> {/* ✅ Attach function to form */}
        <label>Name:</label>
        <input type="text" name="name" required />
        
        <label>Email:</label>
        <input type="email" name="email" required />
        
        <label>Message:</label>
        <textarea name="message" required></textarea>
        
        <button type="submit">Send</button> {/* ✅ Triggers handleSubmit */}
      </form>
    </section>
  );
}
