document.addEventListener("DOMContentLoaded", function () {
    // Function to create and inject HTML for the About page
    function createHomePage() {
        // HTML content for the About page
        var aboutHtml = `
            <h1>Home</h1>
            <p>This is the home page content.</p>
            <a href="/">Go to Home</a>
        `;

        // Inject the HTML into the specified container
        document.getElementById('contentContainer').innerHTML = aboutHtml;
    }

    // Click event listener for the "Go to About" link
    document.getElementById('homeLink').addEventListener('click', function (event) {
        event.preventDefault();

        // Call the function to create the About page
        createHomePage();
    });
});