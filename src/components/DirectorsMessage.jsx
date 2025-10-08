// DirectorsMessage.jsx
import React, { useState } from 'react';
import './DirectorsMessage.css';

export default function DirectorsMessage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="directors-section">
      <div className="directors-container">
        <h2 className="directors-heading">Message from our directors</h2>

        <div className="video-wrapper">
          {!isPlaying ? (
            <div className="video-thumbnail" onClick={handlePlayClick}>
              <img 
                src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg" 
                alt="Directors Message"
                className="thumbnail-image"
              />
              <div className="play-button-overlay">
                <button className="play-button" aria-label="Play video">
                  <span className="play-icon">▶</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9VlvbpXwLJs?si=Eiaesn7IXsqp4Kh4"
                title="Message from Directors"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}