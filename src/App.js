import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Services from './Services'; // You might want to remove this if it's not used anymore
import Contact from './Contact';
import Skills from './Skills';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <label className='logo'>Portfolio</label>
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkbtn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
          <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Skills">Skills</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="https://github.com/devimamidala" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="/Contact">Contact</a></li>
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
      </BrowserRouter>
    </>
  );
}




export default App;

