import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Knowledge from './Pages/Knowledge/AboutUs.jsx';
import Business from './components/Business.jsx';
import Testimonials from './components/Testimonials.jsx';
import DirectorsMessage from './components/DirectorsMessage.jsx';
import GetInTouch from './components/GetInTouch.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Resources from './Pages/Knowledge/Resources.jsx';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Business />
              <About />
              <Testimonials />
              <DirectorsMessage />
              <GetInTouch />
              <Footer />
            </>
          }
        />

        {/* About / About Page */}
        <Route
          path="/about"
          element={
            <>
              <Knowledge />
              <Footer />
            </>
          }
        />
        {/* Resources / About Page */}
        <Route
          path="/resources"
          element={
            <>
              <Resources />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
