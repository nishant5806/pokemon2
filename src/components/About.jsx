// About.jsx
import React from 'react';
import './About.css';

export default function About() {
  const stats = [
    {
      id: 1,
      number: '15+',
      label: 'Years of business excellence',
      darkCard: true
    },
    {
      id: 2,
      number: '100+',
      label: 'Clients across industries',
      darkCard: false
    },
    {
      id: 3,
      number: '24/7',
      label: 'Customer Support',
      darkCard: false
    },
    {
      id: 4,
      number: '4',
      label: 'Strong Business Verticals',
      darkCard: false
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Header */}
        <h2 className="about-heading">About Us</h2>
        
        {/* Subheading */}
        <h3 className="about-subheading">JSB Group – A Legacy of Trust and Innovation</h3>
        
        {/* Description */}
        <p className="about-description">
          Founded with a vision to transform industries, JSB Group has grown into a diversified business leader with operations 
          across logistics, trading, enterprise solutions, and community forums. We are committed to excellence, innovation, 
          and long-term partnerships, enabling businesses to thrive in a fast-changing world.
        </p>

        {/* Stats Cards */}
        <div className="about-stats">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`about-stat-card ${stat.darkCard ? 'dark' : ''}`}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="about-buttons">
          <button className="about-button about-button-primary">Get in Touch</button>
          <button className="about-button about-button-secondary">Know more about us</button>
        </div>
      </div>
    </section>
  );
}