// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'; // import the logo image
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="JSB Group Logo" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>

          <li className="navbar-item navbar-dropdown">
            <button
              className="navbar-link navbar-dropdown-toggle"
              onClick={toggleDropdown}
            >
              Our Businesses <span className="dropdown-arrow">▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="navbar-dropdown-menu">
                <li><Link to="/business1">Business 1</Link></li>
                <li><Link to="/business2">Business 2</Link></li>
                <li><Link to="/business3">Business 3</Link></li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">Resources</Link>
          </li>
          <li className="navbar-item">
            <Link to="/life" className="navbar-link">Life at JSB</Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="navbar-cta">
          <Link to="/contact" className="navbar-button">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
