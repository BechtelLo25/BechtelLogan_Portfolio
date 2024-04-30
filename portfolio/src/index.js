import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/home/js/App.js';
import AboutPage from './components/about/js/About.js';

const seen = false;

function App() {
  if(seen === false) {
    const [currentPage, setCurrentPage] = useState('home'); 
    seen = true;
  }

  // Function to handle switching between pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle button click event
  const handleButtonClick = (event) => {
    if (event.target.id === 'aboutLink') {
      handlePageChange('about');
    } else if (event.target.id === 'mainLink') {
      handlePageChange('home');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleButtonClick);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, []); // Empty dependency array means this effect will only run once when the component mounts

  return (
    <div>
      {/* Conditional rendering based on the current page */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
