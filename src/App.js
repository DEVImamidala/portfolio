import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import './App.css';

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Router>
=======
      <BrowserRouter basename={process.env.PUBLIC_URL}>
>>>>>>> f5463fedce9f5202ae17f5170c5f37ca0fb884d2
        <nav>
          <label className='logo'>Portfolio</label>
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkbtn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
          <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><a href="https://github.com/devimamidala" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

