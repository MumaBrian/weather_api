// models/WeatherData.js
const mongoose = require('mongoose');


const weatherSchema = new mongoose.Schema({
    id: Number,
    main: String,
    description: String,
    icon: String,
});

const weatherDataSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    humidity: Number,
    description: String,
    main: Object,
    weather: [weatherSchema],
    coordinates: Object,
    country:String,
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
