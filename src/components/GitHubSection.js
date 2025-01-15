import React from 'react';
import './GitHubSection.css';

const GitHubSection = () => {
  return (
    <section id="projects" className="github-section">
      <h2>My GitHub Projects</h2>
      <div className="three-column-layout">
      <div className="project-card">
        <h3>Project 1</h3>
        <p>Snake Game</p>
        <a href="https://github.com/arpitg125/Snake-Game" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>OTP-UI</p>
        <a href="https://github.com/arpitg125/OTP-UI" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>Word Replay box</p>
        <a href="https://github.com/arpitg125/Replay-xx" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default GitHubSection;
