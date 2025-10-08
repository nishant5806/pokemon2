// Business.jsx
import React from 'react';
import './Business.css';

export default function Business() {
  const businesses = [
    {
      id: 1,
      title: 'JSB Logistics',
      description: 'Trading, freight forwarding and customs clearance',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      hasButton: false
    },
    {
      id: 2,
      title: 'DVEX (NVOCC – Dubai)',
      description: 'NVOCC services ensuring global trade connectivity',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      hasButton: false
    },
    {
      id: 3,
      title: 'RJ Enterprise',
      description: 'Expanding into FMCG with mineral water and bakery products',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      hasButton: false
    },
    {
      id: 4,
      title: 'JSB Farms',
      description: 'A wellness-focused venture providing natural and holistic lifestyle solutions',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      hasButton: true
    }
  ];

  return (
    <section className="business-section">
      <div className="business-container">
        <h2 className="business-heading">OUR BUSINESS</h2>
        
        <div className="business-grid">
          {businesses.map((business) => (
            <div key={business.id} className="business-card">
              <div 
                className="business-card-image"
                style={{ backgroundImage: `url(${business.image})` }}
              >
                <div className="business-card-overlay"></div>
                <div className="business-card-content">
                  <h3 className="business-card-title">{business.title}</h3>
                  <p className="business-card-description">{business.description}</p>
                  
                  {business.hasButton && (
                    <div className="business-card-actions">
                      <button className="business-card-button">Know more</button>
                      <button className="business-card-icon-button">
                        <span className="arrow-icon">→</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}