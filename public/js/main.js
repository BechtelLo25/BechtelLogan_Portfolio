document.addEventListener("DOMContentLoaded", function () {
    // Function to create and inject HTML for the About page
    function createHomePage() {
        // HTML content for the About page
        var aboutHtml = `
            <h1>Home</h1>
            <p>This is the home page content.</p>
        `;

        // Inject the HTML into the specified container
        document.getElementById('contentContainer') = aboutHtml;
    }

    // Click event listener for the "Go to About" link
    document.getElementById('mainLink').addEventListener('click', function (event) {
        event.preventDefault();

        // Call the function to create the About page
        createHomePage();
    });
});