import React, { useEffect } from 'react';
import pixelPerson from '../res/PixelPerson.png';
import pixelJava from '../res/PixelBorderWithJava.png';
import pixelJs from '../res/PixelBorderWithJs.png';
import pixelCPP from '../res/PixelBorderWithC++.png';
import pixelCss from '../res/PixelBorderWithCss.png';
import pixelEclipse from '../res/PixelBorderWithEclipse.png';
import pixelGit from '../res/PixelBorderWithGit.png';
import pixelGithub from '../res/PixelBorderWithGithub.png';
import pixelHtml from '../res/PixelBorderWithHtml.png';
import pixelMS from '../res/PixelBorderWithMS.png';
import pixelNode from '../res/PixelBorderWithNode.png';
import pixelPython from '../res/PixelBorderWithPython.png';
import pixelVSCode from '../res/PixelBorderWithVSCode.png';
import {Image, ScrollView, Text} from 'react-native';

import '../css/About.css';

function App() {

    document.getElementById("PixelBorderWithJava").addEventListener("click", function() {

        window.open("https://dev.java/", "_blank");
      });
    
    document.getElementById("PixelBorderWithHtml").addEventListener("click", function() {
    
        window.open("https://html.spec.whatwg.org/", "_blank");
      });
    
    document.getElementById("PixelBorderWithJs").addEventListener("click", function() {
    
        window.open("https://www.javascript.com/", "_blank");
      });
    
    document.getElementById("PixelBorderWithGit").addEventListener("click", function() {
    
        window.open("https://git-scm.com/", "_blank");
      });
    
    document.getElementById("PixelBorderWithCss").addEventListener("click", function() {
    
        window.open("https://www.w3.org/TR/CSS/#intro", "_blank");
      });
    
    document.getElementById("PixelBorderWithNode").addEventListener("click", function() {
    
        window.open("https://nodejs.org/en", "_blank");
      });
    
    document.getElementById("PixelBorderWithVSCode").addEventListener("click", function() {
    
        window.open("https://code.visualstudio.com/", "_blank");
      });
    
    document.getElementById("PixelBorderWithEclipse").addEventListener("click", function() {
    
        window.open("https://eclipseide.org/", "_blank");
      });
    
    document.getElementById("PixelBorderWithMS").addEventListener("click", function() {
    
        window.open("https://www.microsoft.com/en-us/windows/?r=1", "_blank");
      });
    
    document.getElementById("PixelBorderWithGithub").addEventListener("click", function() {
    
        window.open("https://github.com/", "_blank");
      });
    
    document.getElementById("PixelBorderWithPython").addEventListener("click", function() {
    
        window.open("https://python.org/", "_blank");
      });
    
    document.getElementById("PixelBorderWithC++").addEventListener("click", function() {
    
        window.open("https://isocpp.org/", "_blank");
      });
      
    return (
        <>
          <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap"
    rel="stylesheet"
  />
  <title>Logan | About</title>
  <link rel="stylesheet" href="/css/about.css" />
  <link rel="icon" type="image/x-icon" href="/res/favicon.ico" />
  <view>
    <button>
    <a href="/html/index.html" id="mainLink">
      LB
    </a>
  </button>
  <a href="/html/index.html" id="mainLink"></a>
  <nav>
    <a href="/html/index.html" id="mainLink"></a>
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
  <div>
    <img src={pixelPerson} alt="Pixel Person" id="pixelPerson" />
  </div>
  <div>
    <h1 id="header">Get to know me</h1>
    <h2 id="desc1">
      I am Logan Bechtel from Maryland. I am the lead programmer in my FRC team.
      I like to play games, travel, and spend time with friends and family.
    </h2>
  </div>
  <div className="skillSetImages">
    <h2 id="skills">Languages and Programs</h2>
    <img
      src={pixelJava}
      alt="Pixel Border With Java"
      id="PixelBorderWithJava"
      className="image"
    />
    <img
      src={pixelHtml}
      alt="Pixel Border With Html"
      id="PixelBorderWithHtml"
      className="image"
    />
    <img
      src={pixelJs}
      alt="Pixel Border With Js"
      id="PixelBorderWithJs"
      className="image"
    />
    <img
      src={pixelGit}
      alt="Pixel Border With Git"
      id="PixelBorderWithGit"
      className="image"
    />
    <img
      src={pixelCss}
      alt="Pixel Border With Css"
      id="PixelBorderWithCss"
      className="image"
    />
    <img
      src={pixelNode}
      alt="Pixel Border With Node"
      id="PixelBorderWithNode"
      className="image"
    />
  </div>
  <div className="skillProgramsImages">
    <img
      src={pixelVSCode}
      alt="Pixel Border With VSCode"
      id="PixelBorderWithVSCode"
      className="image"
    />
    <img
      src={pixelEclipse}
      alt="Pixel Border With Eclipse"
      id="PixelBorderWithEclipse"
      className="image"
    />
    <img
      src={pixelMS}
      alt="Pixel Border With MS"
      id="PixelBorderWithMS"
      className="image"
    />
    <img
      src={pixelGithub}
      alt="Pixel Border With Github"
      id="PixelBorderWithGithub"
      className="image"
    />
  </div>
  <div className="learningImages">
    <h2 id="learning">Learning</h2>
    <img
      src={pixelPython}
      alt="Pixel Border With Python"
      id="PixelBorderWithPython"
      className="image"
    />
    <img
      src={pixelCPP}
      alt="Pixel Border With C++"
      id="PixelBorderWithC++"
      className="image"
    />
  </div>
  <div>
    <h1 />
  </div>
  <div>
    <h1>.</h1>
  </div>
  <footer>© Designed and Developed by Logan Bechtel</footer></view>
  
</>
        </>
      );
}

export default App;