import React, { useEffect } from 'react';
import resume from '../res/resume.png';

import '../css/Resume.css';

function Resume() {

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
            <title>Logan | Resume</title>
            <link rel="stylesheet" href="/css/Resume.css" />
            <link rel="icon" type="image/x-icon" href="/res/favicon.ico" />
            <view>
                <div>
                    <h1 id="resumeheader">Resume</h1>
                </div>
                <div class="resume">
                    <img src={resume} alt="Resume" id="resume" />
                </div>
            </view>
        </>
    );
}

export default Resume;
