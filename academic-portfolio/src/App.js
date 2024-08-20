import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './views/Home';
import About from './views/About';
import Education from './views/Education';
import Research from './views/Research';
import Publications from './views/Publications';
import Projects from './views/Projects';
import Comments from './views/Comments';
import Contact from './views/Contact';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* dual route for the home page */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;