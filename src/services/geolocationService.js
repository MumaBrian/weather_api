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


module.exports = {
    getGeolocation,
    // getCurrentWeather
}