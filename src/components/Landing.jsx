import React from 'react';
import '../styles/landing.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1>Your Catchy Headline</h1>
          <p>Engaging and descriptive subheadline here.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
