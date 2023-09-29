const weatherService = require('../services/weatherService');

async function getCurrentWeather(req, res) {
    const { city } = req.body;
    try {
        const data = await weatherService.getCurrentWeather(city);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
}

async function getPastWeather(req, res) {
    try {
        const data = await weatherService.getPastWeather();
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
}


module.exports = {
    getCurrentWeather,
    getPastWeather,
};
