// models/WeatherData.js
const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    humidity: Number,
    description: String,
    // Add other relevant fields as needed
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
