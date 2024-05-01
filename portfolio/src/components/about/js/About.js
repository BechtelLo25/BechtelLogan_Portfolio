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
import pixelReact from '../res/PixelBorderWithReact.png';

import '../css/About.css';

function App() {
    useEffect(() => {
        const handleClick = (url) => {
            window.open(url, "_blank");
        };

        const imageUrls = {
            PixelBorderWithJava: "https://dev.java/",
            PixelBorderWithHtml: "https://html.spec.whatwg.org/",
            PixelBorderWithJs: "https://www.javascript.com/",
            PixelBorderWithGit: "https://git-scm.com/",
            PixelBorderWithCss: "https://www.w3.org/TR/CSS/#intro",
            PixelBorderWithNode: "https://nodejs.org/en",
            PixelBorderWithVSCode: "https://code.visualstudio.com/",
            PixelBorderWithEclipse: "https://eclipseide.org/",
            PixelBorderWithMS: "https://www.microsoft.com/en-us/windows/?r=1",
            PixelBorderWithGithub: "https://github.com/",
            PixelBorderWithPython: "https://python.org/",
            PixelBorderWithCPlusPlus: "https://isocpp.org/"
        };

        const addEventListeners = () => {
            Object.keys(imageUrls).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener("click", () => handleClick(imageUrls[id]));
                }
            });
        };

        addEventListeners();

        // Clean up event listeners when the component unmounts
        return () => {
            Object.keys(imageUrls).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.removeEventListener("click", () => handleClick(imageUrls[id]));
                }
            });
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
            <title>Logan | About</title>
            <link rel="stylesheet" href="/css/about.css" />
            <link rel="icon" type="image/x-icon" href="/res/favicon.ico" />
            <view>
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
                    <img
                        src={pixelReact}
                        alt="Pixel Border With React"
                        id="PixelBorderWithReact"
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
                        id="PixelBorderWithCPlusPlus"
                        className="image"
                    />
                </div>
            </view>
        </>
    );
}

export default App;
