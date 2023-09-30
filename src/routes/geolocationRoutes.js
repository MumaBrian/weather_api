const express = require('express');
const unirest = require("unirest");
const router = express.Router();
const geolocationController = require('../controllers/geolocationController')

router.post('/geolocation', geolocationController.getGeolocation);
router.get("/", (req, res) => {
    var apiCall = unirest("GET",
        "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
    );
    apiCall.headers({
        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI
    });
    apiCall.end(function (result) {
        if (res.error) throw new Error(result.error);
        console.log(result.body);
        res.send(result.body);
    });
});

module.exports = router

