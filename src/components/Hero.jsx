// hero.jsx
import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        {/* Background Image */}
        <div 
          className="hero-background"
          style={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg)',
          }}
        >
          {/* Overlay */}
          <div className="hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="hero-content">
          {/* Heading */}
          <h1 className="hero-heading">
            Driving Growth Through{' '}
            <span className="hero-highlight">Logistics</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            JSB Group is a trusted business conglomerate offering logistics solutions, trading expertise, enterprise services, and community forums. With a legacy of excellence and innovation, we connect businesses, empower growth, and deliver results.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="hero-button hero-button-primary">
              Get in Touch
            </button>
            <button className="hero-button hero-button-secondary">
              Explore Our Businesses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}