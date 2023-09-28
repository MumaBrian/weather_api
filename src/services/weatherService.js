const axios = require('axios');
const WeatherData = require('../models/model')


const API_KEY = process.env.API_KEY
async function getCurrentWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${API_KEY}`);

        const weatherData = {
            city: city,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
        };

        const newWeatherData = new WeatherData(weatherData);
        await newWeatherData.save();

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getPastWeather(city, date) {
    try {

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?q=${city}&dt=${date}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCurrentWeather,
    getPastWeather,
};
