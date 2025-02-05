import React from 'react';
import profile from '../src/assets/profile.jpeg';
import resumePDF from '../src/assets/resume.pdf';

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profile} alt="Can Cankat" width="200" />
      <p>I am a **game developer** specializing in Unity and object-oriented programming.</p>
      
      {/* ✅ Button to Download Resume */}
      <a href={resumePDF} download="CanCankat_Resume.pdf">
        <button className="btn">Download Resume</button>
      </a>
    </section>
  );
}
