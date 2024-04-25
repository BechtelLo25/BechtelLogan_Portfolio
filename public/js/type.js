$(document).ready(function() {
    var titles = [
        "Software Engineer",
        "Java Programmer",
        "Team Leader",
        "Web Developer",
        "FIRST Team Member",
        "Open Source Contributor"
    ];

    var index = 0;
    var titleElement = $("#title");
    var typingSpeed = 150; 
    var backspaceSpeed = 75; 
    var cursorBlinkSpeed = 400; 

    function typeText(text, callback) {
        var textIndex = 0;
        var typingInterval = setInterval(function() {
            titleElement.html(text.substring(0, textIndex) + '<span class="cursor">|</span>'); 
            textIndex++;

            if (textIndex > text.length) {
                clearInterval(typingInterval);
                setTimeout(callback, 1000); 
            } else if (textIndex === text.length) {
                onTypingComplete();
            }
        }, typingSpeed);

        var cursorInterval = setInterval(function() {
            var cursor = titleElement.find(".cursor");
            cursor.toggleClass("hidden");
        }, cursorBlinkSpeed);
    }

    function backspace(callback) {
        var text = titleElement.text();
        var textIndex = text.length;
        var backspaceInterval = setInterval(function() {
            titleElement.html(text.substring(0, textIndex - 1) + '<span class="cursor">|</span>'); 
            textIndex--;

            if (textIndex === 0) {
                clearInterval(backspaceInterval);
                callback();
            }
        }, backspaceSpeed);

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

    cycleTitles();
});
