// src/services/weatherService.js
const axios = require('axios');

const API_KEY = process.env.API_KEY

// Function to get current weather data
async function getCurrentWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to get past weather data (You may need to adjust the API endpoint)
async function getPastWeather(city, date) {
    try {
        // Make an API request to get past weather data
        // Adjust the URL and parameters as needed for historical data retrieval
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?q=${city}&dt=${date}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to get future weather data
async function getFutureWeather(city) {
    try {
        // Similar to getCurrentWeather but may require different API endpoints
        // Adjust as needed
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCurrentWeather,
    getPastWeather,
    getFutureWeather,
};
