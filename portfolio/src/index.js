import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/home/js/App.js';
import AboutPage from './components/about/js/About.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  // Function to handle switching between pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <button onClick={() => handlePageChange('home')}>
    <a href="/html/index.html" id="mainLink">
      LB
    </a>
  </button>
  
  <a href="/html/index.html" id="mainLink"></a>
  <nav>
    <a href="/html/index.html" id="mainLink"></a>
    <button></button>
    <a href="/html/about.html" id="aboutLink">
      About
    </a>
    <a href="/html/projects.html" id="projectLink">
      Projects
    </a>
    <a href="/html/resume.html" id="resumeLink">
      Resume
    </a>
    <a href="/html/contact.html" id="contactLink">
      Contact
    </a>
  </nav>
      {/* Conditional rendering based on the current page */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}

      {/* Buttons to switch between pages */}
      <button onClick={() => handlePageChange('home')} id="butt">Home</button>
      <button onClick={() => handlePageChange('about')}>About</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));