import React, { useEffect } from 'react';
import pixelComputer from '../res/PixelComputer.gif';
import '../css/App.css';

function App() {
  
  useEffect(() => {
    const titles = [
      "Software Engineer",
      "Java Programmer",
      "Team Leader",
      "Web Developer",
      "FIRST Team Member",
      "Mentor"
    ];

    let index = 0;
    const titleElement = document.getElementById("title");
    const typingSpeed = 150;
    const backspaceSpeed = 62;
    const cursorBlinkSpeed = 400;

    function typeText(text, callback) {
      let textIndex = 0;
      const typingInterval = setInterval(function() {
        titleElement.innerHTML = text.substring(0, textIndex) + '<span class="cursor">|</span>';
        textIndex++;

        if (textIndex > text.length) {
          clearInterval(typingInterval);
          setTimeout(callback, 1000);
        }
      }, typingSpeed);

      const cursorInterval = setInterval(function() {
        const cursor = titleElement.querySelector(".cursor");
        cursor.classList.toggle("hidden");
      }, cursorBlinkSpeed);
    }

    function backspace(callback) {
      const text = titleElement.textContent;
      let textIndex = text.length;
      const backspaceInterval = setInterval(function() {
        titleElement.innerHTML = text.substring(0, textIndex - 1) + '<span class="cursor">|</span>';
        textIndex--;

        if (textIndex === 0) {
          clearInterval(backspaceInterval);
          callback();
        }
      }, backspaceSpeed);

      const cursorInterval = setInterval(function() {
        const cursor = titleElement.querySelector(".cursor");
        cursor.classList.toggle("hidden");
      }, cursorBlinkSpeed);
    }

    function cycleTitles() {
      typeText(titles[index], function() {
        backspace(function() {
          index = (index + 1) % titles.length;
          cycleTitles();
        });
      });
    }

    cycleTitles();

    return () => {
      // Clean up code if needed
    };
  }, []); // Empty dependency array means this effect will only run once when the component mounts

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        rel="stylesheet"
      />
      <title>Logan | Portfolio</title>
      <link rel="stylesheet" href="/css/index.css" />
      <link rel="icon" type="image/x-icon" href="/res/favicon.ico" />
      <div>
        <h1 id="name">Logan Bechtel</h1>
        <h2 id="title" />
        <img src={pixelComputer} alt="Pixel Computer" id="pixelComp" />
      </div>
      {/* JavaScript for typing animation */}
      <footer>© Designed and Developed by Logan Bechtel</footer>
    </>
  );
}

export default App;
