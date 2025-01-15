import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:arpitg125@gmail.com" className="hire-button">arpitg125@gmail.com</a>
      <a href="/Arpit's-Resume.pdf" className="download-cv" download>
        Download CV
      </a>
    </footer>
  );
};

export default Footer;