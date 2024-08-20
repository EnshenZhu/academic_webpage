import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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