const axios = require('axios');
const WeatherData = require('../models/model');

const apiKey = process.env.API

const baseUrl = 'http://api.weatherapi.com/v1';
async function getCurrentWeather(location) {
    try {
        const response = await axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${location}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching current weather:', error.message);
        throw error;
    }
}

async function getWeatherForecast(q,days,date,hour,language,alerts) {
    try {
        const response = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${q}&days=${days}&dt=${date}&hour=${hour}&alerts${alerts}&lang${language}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching current weather:', error.message);
        throw error;
    }
}

async function getWeatherHistory(q, end_dt, date, hour, language) {
    try {
        const response = await axios.get(`${baseUrl}/history.json?key=${apiKey}&q=${q}&dt=${date}&end_dt=${end_dt}&hour=${hour}&lang${language}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching current weather:', error.message);
        throw error;
    }
}

async function getWeatherHistory(q, end_dt, date, hour, language) {
    try {
        const response = await axios.get(`${baseUrl}/history.json?key=${apiKey}&q=${q}&dt=${date}&end_dt=${end_dt}&hour=${hour}&lang${language}`);
        return response.data;
    } catch (error) {
        // Handle errors here, e.g., log the error or throw an exception
        console.error('Error fetching current weather:', error.message);
        throw error;
    }
}




async function getPastWeather() {
    try {

        const data = await WeatherData.find() //await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?q=${city}&dt=${date}&appid=${API_KEY}`);
        return data;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getCurrentWeather,
    getPastWeather,
    getWeatherForecast,
    getWeatherHistory
};
