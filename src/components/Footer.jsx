import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section: Logo */}
        <div className="footer-logo-section">
          <img src="src\assets\images\logo.png" alt="" />
        </div>

        {/* Middle Section: Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Resources</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-column">
            <h4>Businesses</h4>
            <a href="#">JSB Logistics</a>
            <a href="#">DVEX</a>
            <a href="#">RJ Enterprise</a>
            <a href="#">JSB Farms</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">Vision & Mission</a>
            <a href="#">Leadership</a>
            <a href="#">Achievements</a>
            <a href="#">Certifications</a>
            <a href="#">Life at JSB</a>
          </div>
        </div>
      </div>

      <hr className="footer-line" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © JSB Group | Logistics · Trade · Enterprise · Forums | Trusted
          Business Partner in India & Beyond
        </p>

        <div className="footer-socials">
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
