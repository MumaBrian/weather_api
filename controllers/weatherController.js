const weatherService = require('../services/weatherService');

async function getCurrentWeather(req, res) {
    const { city } = req.body;
    try {
        const data = await weatherService.getCurrentWeather(city);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
}

async function getPastWeather(req, res) {
    const { city, date } = req.body;
    try {
        const data = await weatherService.getPastWeather(city, date);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
}

// Controller function to get future weather
async function getFutureWeather(req, res) {
    const { city } = req.body;
    try {
        const data = await weatherService.getFutureWeather(city);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
}

module.exports = {
    getCurrentWeather,
    getPastWeather,
    getFutureWeather,
};
