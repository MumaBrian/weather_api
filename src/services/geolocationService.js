const axios = require('axios');

const API_KEY = process.env.API_KEY

async function getGeolocation(latitude, longitude) {
    try {
        // const { latitude, longitude } = req.body;

        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );

        const { main, weather, name } = weatherResponse.data;

        const responseData = {
            location: name,
            temperature: main.temp,
            weatherDescription: weather[0].description,
        };

        return responseData
    } catch (error) {
        console.error('Error:', error);
        // res.status(500).json({ error: 'An error occurred while fetching weather data.' });
    }

}
const baseUrl = 'http://api.weatherapi.com/v1';
const apiKey = process.env.API
async function searchLocation(q) {
    try {
        const response = await axios.get(`${baseUrl}/search.json?key=${apiKey}&q=${q}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching current weather:', error.message);
        throw error;
    }
}

async function ipLookup(q) {
    try {
        const response = await axios.get(`${baseUrl}/ip.json?key=${apiKey}&q=${q}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching IP:', error.message);
        throw error;
    }
}

async function searchTimezone(q) {
    try {
        const response = await axios.get(`${baseUrl}/timezone.json?key=${apiKey}&q=${q}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching timezone:', error.message);
        throw error;
    }
}


async function searchSports(q) {
    try {
        const response = await axios.get(`${baseUrl}/sports.json?key=${apiKey}&q=${q}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching sports:', error.message);
        throw error;
    }
}

module.exports = {
    getGeolocation,
    searchLocation,
    ipLookup,
    searchTimezone,
    searchSports
}