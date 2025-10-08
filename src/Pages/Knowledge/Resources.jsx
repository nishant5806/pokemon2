// Resources.jsx
import React, { useEffect, useState } from 'react';
import './Resources.css';

export default function Resources() {
  const resources = [
    { id: 1, number: 50, label: 'Guides & Tutorials', darkCard: true },
    { id: 2, number: 200, label: 'Industry Reports', darkCard: false },
    { id: 3, number: 100, label: 'Tools & Templates', darkCard: false },
    { id: 4, number: 30, label: 'Webinars & Workshops', darkCard: false },
  ];

  const [counts, setCounts] = useState(resources.map(() => 0));

  useEffect(() => {
    let start = null;
    const duration = 1500; // animation duration in ms

    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      setCounts(
        resources.map(res => Math.floor(res.number * easeOutQuad(progress)))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const easeOutQuad = t => 1 - (1 - t) * (1 - t); // easing function
    requestAnimationFrame(step);
  }, []);

  return (
    <section className="resources-section">
      <div className="resources-container">
        <h2 className="resources-heading">Our Resources</h2>
        <h3 className="resources-subheading">Empowering Businesses with Knowledge</h3>
        <p className="resources-description">
          Explore our comprehensive library of resources designed to help businesses grow and innovate. From 
          in-depth industry reports to practical tools and tutorials, JSB Group provides the insights you need 
          to make informed decisions and stay ahead in a competitive market.
        </p>

        {/* Stats Cards */}
        <div className="resources-stats">
          {resources.map((res, index) => (
            <div key={res.id} className={`resources-stat-card ${res.darkCard ? 'dark' : ''}`}>
              <div
                className="stat-number"
                style={{ color: res.darkCard ? '#ffffff' : '#0d47a1' }}
              >
                {counts[index]}{res.id === 1 || res.id === 3 ? '+' : ''}
              </div>
              <div
                className="stat-label"
                style={{ color: res.darkCard ? '#d1d5db' : '#4b5563' }}
              >
                {res.label}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="resources-buttons">
          <button className="resources-button resources-button-primary">Download Now</button>
          <button className="resources-button resources-button-secondary">Explore More</button>
        </div>
      </div>
    </section>
  );
}
