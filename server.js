// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public directory

// In-memory storage for packages (for demonstration purposes)
let packages = [];

// Serve the packages.html file
app.get('/packages', (req, res) => {
    res.sendFile(__dirname + '/public/packages.html');
});

// API endpoint to get packages
app.get('/api/packages', (req, res) => {
    res.json(packages);
});

// API endpoint to add a new package
app.post('/api/packages', (req, res) => {
    const { name, details } = req.body;
    if (!name || !details) {
        return res.status(400).json({ error: 'Name and details are required.' });
    }
    const newPackage = { name, details };
    packages.push(newPackage);
    res.status(201).json(newPackage); // Respond with the newly added package
});


// Connect to MongoDB
mongoose.connect('mongodb://localhost/journeygenie', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/recommendations', require('./routes/recommendations'));
app.use('/api/itineraries', require('./routes/itineraries'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});