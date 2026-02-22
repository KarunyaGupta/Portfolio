import React from 'react';
import '../components/CSS/WhyMe.css';
import photo from '../assets/photo.webp';

const WhyMe = () => {
  return (
    <div className="whyme-container">
      <div className="whyme-profile">
        <img src={photo} alt="Profile" className="whyme-img" />
      </div>
      <div className="whyme-content">
        <h1 className="whyme-title">What Makes Me Extraordinary?</h1>
        <h2 className="whyme-name">Karunya Gupta</h2>
        <ul className="whyme-list">
          <li>Chairperson, IEEE CIET Student Branch</li>
          <li>BE Computer Science Engineering</li>
          <li>Role applied: Business Analyst</li>
        </ul>
        <div className="whyme-leadership">Leadership backed by execution.</div>
        <div className="whyme-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" aria-label="Message">
            <i className="fas fa-comment"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
