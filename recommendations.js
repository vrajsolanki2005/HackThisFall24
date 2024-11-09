// routes/recommendations.js
const express = require('express');
const router = express.Router();

// Mock data for recommendations
const recommendations = [
    { id: 1, title: 'Explore Bali', description: 'Experience the vibrant culture and beaches of Bali' },
    { id: 2, title: 'Visit Goa', description: 'Enjoy the beautiful beaches and nightlife of Goa' },
];

// Get recommendations
router.get('/', (req, res) => {
    res.json(recommendations);
});

module.exports = router;