const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'publicn/html/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});