import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/home/js/App.js';
import AboutPage from './components/about/js/About.js';
import Github from './components/about/js/Github.js';
import pixelGithub from './indexRes/PixelGithub.png'
import ResumePage from './components/resume/js/Resume.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  // Function to handle switching between pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <><><div>
      <button onClick={() => handlePageChange('home')}>
        <a href="/html/index.html" id="mainLink">
          LB
        </a>
      </button>

      <a href="/html/index.html" id="mainLink"></a>
      <nav>
        <a href="/html/index.html" id="mainLink"></a>
        <button></button>
        <a onClick={() => handlePageChange('about')} id="aboutLink">
          About
        </a>
        <a href="/html/projects.html" id="projectLink">
          Projects
        </a>
        <a onClick={() => handlePageChange('resume')} id="resumeLink">
          Resume
        </a>
        <a href="/html/contact.html" id="contactLink">
          Contact
        </a>
      </nav>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <><AboutPage /><Github /></>}
      {currentPage === 'resume' && <ResumePage />}

    </div>
      <footer>
      © Designed and Developed by Logan Bechtel
      </footer>
      </></>
    
  );
}

ReactDOM.render(<App />, document.getElementById('root'));