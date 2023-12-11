document.addEventListener("DOMContentLoaded", function () {
    // Function to create and inject HTML for the About page
    function createAboutPage() {
        // HTML content for the About page
        var aboutHtml = `
            <h1>About Us</h1>
            <a href="/">Go to Home</a>
        `;

        // Inject the HTML into the specified container
        document.getElementById('aboutContentContainer').innerHTML = aboutHtml;
    }

    // Click event listener for the "Go to About" link
    document.getElementById('aboutLink').addEventListener('click', function (event) {
        event.preventDefault();

        // Call the function to create the About page
        createAboutPage();
    });
});