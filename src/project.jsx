import React from 'react';
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';

export default function Project() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project">
        <img src={project1} alt="Project 1" />
        <h3>Realms of Shadow</h3>
        <p>A combat RPG game with dynamic camera and behavior trees.</p>
      </div>
      <div className="project">
        <img src={project2} alt="Project 2" />
        <h3>Puppy Collector</h3>
        <p>A casual mobile game where you collect puppies and build a team.</p>
      </div>
      <div className="project">
        <img src={project3} alt="Project 3" />
        <h3>Web Dashboard</h3>
        <p>A React-based admin panel for monitoring game analytics.</p>
      </div>
    </section>
  );
}
