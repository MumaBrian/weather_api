const geolocationService=require('../services/geolocationService')

async function getGeolocation(req, res) {
    const { latitude, longitude } = req.body;
    try {
        const data = await geolocationService.getGeolocation(latitude,longitude);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to fetch getGeolocation data' });
    }
}




module.exports = {
    getGeolocation,
    // getCurrentWeather
    
}