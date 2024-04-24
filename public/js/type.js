$(document).ready(function() {
    var titles = [
        "Software Developer",
        "Java Programmer",
        "Engineer",
        "Web Developer",
        "JavaScript Programmer",
        "Open Source Contributor"
    ];

    var index = 0;
    var titleElement = $("#title");
    var typingSpeed = 150; // Typing speed in milliseconds
    var backspaceSpeed = 75; // Backspace speed in milliseconds
    var cursorBlinkSpeed = 400; // Cursor blink speed in milliseconds

    function typeText(text, callback) {
        var textIndex = 0;
        var typingInterval = setInterval(function() {
            titleElement.html(text.substring(0, textIndex) + '<span class="cursor">|</span>'); // Add cursor
            textIndex++;

            if (textIndex > text.length) {
                clearInterval(typingInterval);
                setTimeout(callback, 1000); // Wait for 1 second before backspacing
            } else if (textIndex === text.length) {
                onTypingComplete(); // Call onTypingComplete when typing animation completes
            }
        }, typingSpeed);

        // Blinking cursor
        var cursorInterval = setInterval(function() {
            var cursor = titleElement.find(".cursor");
            cursor.toggleClass("hidden");
        }, cursorBlinkSpeed);
    }

    function backspace(callback) {
        var text = titleElement.text();
        var textIndex = text.length;
        var backspaceInterval = setInterval(function() {
            titleElement.html(text.substring(0, textIndex - 1) + '<span class="cursor">|</span>'); // Add cursor
            textIndex--;

            if (textIndex === 0) {
                clearInterval(backspaceInterval);
                callback();
            }
        }, backspaceSpeed);

        // Blinking cursor
        var cursorInterval = setInterval(function() {
            var cursor = titleElement.find(".cursor");
            cursor.toggleClass("hidden");
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

    // Start the cycle
    cycleTitles();

    function onTypingComplete() {
        console.log("Hi"); // Print "Hi" when typing animation completes
    }
});
