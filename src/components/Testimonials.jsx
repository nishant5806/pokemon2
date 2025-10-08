// Testimonials.jsx
import React, { useEffect, useRef } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechCorp Solutions',
      text: 'JSB Logistics has been instrumental in streamlining our supply chain. Their team is highly professional and dependable. Partnering with JSB Forums gave us opportunities to network and scale faster.',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      isVideo: false
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Director, Global Imports Ltd',
      text: 'Working with JSB Group has transformed our logistics operations. Their expertise in customs clearance and freight forwarding is unmatched. Highly recommended!',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      isVideo: false
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Operations Manager, FreshFoods Inc',
      text: 'JSB Logistics has been instrumental in streamlining our supply chain. Their team is highly professional and dependable. Partnering with JSB Forums gave us opportunities to network and scale faster.',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      isVideo: true
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Founder, GreenLeaf Enterprises',
      text: 'The professionalism and dedication of JSB Group is outstanding. They helped us expand our business internationally with seamless logistics support.',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      isVideo: false
    },
    {
      id: 5,
      name: 'Priya Sharma',
      position: 'VP Supply Chain, RetailHub',
      text: 'JSB Logistics has been instrumental in streamlining our supply chain. Their team is highly professional and dependable. Partnering with JSB Forums gave us opportunities to network and scale faster.',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      isVideo: true
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'COO, Pacific Trading Co',
      text: 'Outstanding service from start to finish. JSB Group\'s attention to detail and customer-centric approach makes them our preferred logistics partner.',
      image: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      isVideo: false
    }
  ];

  // Split testimonials into two rows for continuous scrolling
  const row1Testimonials = testimonials.slice(0, 3);
  const row2Testimonials = testimonials.slice(3, 6);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">TESTIMONIALS</h2>

        {/* First Row - Scrolling Left */}
        <div className="testimonials-scroll-wrapper">
          <div className="testimonials-row scroll-left" ref={scrollRef1}>
            {[...row1Testimonials, ...row1Testimonials].map((testimonial, index) => (
              <div key={`row1-${testimonial.id}-${index}`} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image-wrapper">
                    {testimonial.isVideo ? (
                      <div className="video-thumbnail">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <div className="video-play-button">
                          <span className="play-icon">▶</span>
                        </div>
                      </div>
                    ) : (
                      <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    )}
                  </div>
                  <div className="testimonial-info">
                    <div className="quote-mark">"</div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-position">({testimonial.position})</div>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="testimonials-scroll-wrapper">
          <div className="testimonials-row scroll-right" ref={scrollRef2}>
            {[...row2Testimonials, ...row2Testimonials].map((testimonial, index) => (
              <div key={`row2-${testimonial.id}-${index}`} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image-wrapper">
                    {testimonial.isVideo ? (
                      <div className="video-thumbnail">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <div className="video-play-button">
                          <span className="play-icon">▶</span>
                        </div>
                      </div>
                    ) : (
                      <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    )}
                  </div>
                  <div className="testimonial-info">
                    <div className="quote-mark">"</div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-position">({testimonial.position})</div>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}