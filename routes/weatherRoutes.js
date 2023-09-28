const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Routes for current weather, past weather, and future weather
router.get('/current', weatherController.getCurrentWeather);
router.get('/past', weatherController.getPastWeather);
router.get('/future', weatherController.getFutureWeather);

module.exports = router;
