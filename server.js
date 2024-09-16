const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the routes to serve the HTML files
app.get('/app1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app1.html'));
});

app.get('/app2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app2.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

