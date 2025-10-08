import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="getintouch-card">
      <div className="getintouch-overlay"></div>
      <div className="getintouch-content">
        <h1 className="getintouch-title">Ready to Grow with JSB Group?</h1>
        <p className="getintouch-text">
          Discover how our logistics expertise, trading services, and enterprise
          solutions can help your business succeed.
        </p>
        <button className="getintouch-btn">Get in Touch</button>
      </div>
    </div>
  );
};

export default GetInTouch;
