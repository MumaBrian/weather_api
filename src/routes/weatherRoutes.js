const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Routes for current weather, past weather, and future weather
router.post('/current', weatherController.getCurrentWeather);
router.get('/past', weatherController.getPastWeather);

module.exports = router;
