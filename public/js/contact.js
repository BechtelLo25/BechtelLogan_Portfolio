document.addEventListener("DOMContentLoaded", function () {
    // Function to create and inject HTML for the Contact page
    function createContactPage() {
        // HTML content for the Contact page
        var contactHtml = `
            <h1>Contact Us</h1>
            <p>This is the contact page content.</p>
        `;

        // Inject the HTML into the specified container
        document.getElementById('contentContainer').innerHTML = contactHtml;
    }

    // Click event listener for the "Go to Contact" link
    document.getElementById('contactLink').addEventListener('click', function (event) {
        event.preventDefault();

        // Call the function to create the Contact page
        createContactPage();
    });
});