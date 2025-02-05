import React from 'react';

export default function Education() {
  return (
    <section id="education">
      <h2>Education & Qualifications</h2>

      {/* ✅ Koc University */}
      <div className="education-item">
        <h3>Koc University</h3>
        <p><strong>Degree:</strong> B.Sc. in Electrical & Electronics Engineering</p>
        <p><strong>Years:</strong> 2014 - 2019</p>
        <p>Studied electrical engineering with a strong foundation in coding (Java, C++, C#).</p>
      </div>

      {/* ✅ Centennial College */}
      <div className="education-item">
        <h3>Centennial College</h3>
        <p><strong>Program:</strong> Game Development</p>
        <p><strong>Years:</strong> 2024 - Present</p>
        <p>Currently studying game development, focusing on Unity, game design, and programming.</p>
      </div>
    </section>
  );
}
