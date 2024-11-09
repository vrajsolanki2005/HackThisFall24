// routes/itineraries.js
const express = require('express');
const router = express.Router();

// Mock data for itineraries
let itineraries = [
    { id: 1, userId: '1', itinerary: '3 days in Bali' },
    { id: 2, userId: '1', itinerary: '2 days in Goa' },
];

// Get itineraries by user ID
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const userItineraries = itineraries.filter(itinerary => itinerary.userId === userId);
    
    if (userItineraries.length > 0) {
        res.json(userItineraries);
    } else {
        res.status(404).send('No itineraries found for this user');
    }
});

// Add a new itinerary
router.post('/', (req, res) => {
    const { userId, itinerary } = req.body;
    const newItinerary = {
        id: itineraries.length + 1, // Simple ID generation
        userId,
        itinerary
    };
    itineraries.push(newItinerary);
    res.status(201).json(newItinerary);
});

// Delete an itinerary by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    itineraries = itineraries.filter(itinerary => itinerary.id !== id);
    
    res.status(204).send(); // No Content response
});

module.exports = router;