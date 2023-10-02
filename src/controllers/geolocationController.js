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

async function searchLocation(req, res) {
    const {q} = req.body;
    try {
        const data = await geolocationService.searchLocation(q);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to search location data' });
    }
}

async function ipLookup(req, res) {
    const { q } = req.body;
    try {
        const data = await geolocationService.ipLookup(q);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to search location data' });
    }
}

async function searchTimezone(req, res) {
    const { q } = req.body;
    try {
        const data = await geolocationService.searchTimezone(q);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to search location data' });
    }
}

async function searchSports(req, res) {
    const { q } = req.body;
    try {
        const data = await geolocationService.searchSports(q);
        res.json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Unable to search location data' });
    }
}


module.exports = {
    getGeolocation,
    searchLocation,
    searchTimezone,
    ipLookup,
    searchSports
}