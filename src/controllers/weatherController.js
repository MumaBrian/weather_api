const weatherService = require('../services/weatherService');

// async function getCurrentWeather(req, res) {
//     const { city } = req.body;
//     try {
//         const data = await weatherService.getCurrentWeather(city);
//         res.json(data);
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ error: 'Unable to fetch weather data' });
//     }
// }

async function getPastWeather(req, res) {
    try {
        const data = await weatherService.getPastWeather();
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
}

async function getCurrentWeather(req, res) {
    const { location} = req.body;
    try {
        const data = await weatherService.getCurrentWeather(location);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to fetch current weather data' });
    }
}

async function getWeatherForecast(req, res) {
    const { q, days, date, hour, language, alerts } = req.body;
    try {
        const data = await weatherService.getWeatherForecast(q, days, date, hour, language, alerts);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to fetch weather forecast data' });
    }
}

async function getWeatherHistory(req, res) {
    const { q, end_dt, date, hour, language } = req.body;
    try {
        const data = await weatherService.getWeatherHistory(q, end_dt, date, hour, language);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to fetch weather history data' });
    }
}

module.exports = {
    getCurrentWeather,
    getPastWeather,
    getWeatherForecast,
    getWeatherHistory
};
