const express = require('express');
const router = express.Router();
const unirest = require("unirest");

router.get("/", (req, res) => {

    var apiCall = unirest("GET",

        "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"

    );

    apiCall.headers({

        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",

        "x-rapidapi-key": process.env.RAPIDAPI

    });

    apiCall.end(function (result) {

        if (result.error) throw new Error(result.error);

        console.log(result.body);

        res.send(result.body);

    });

});

module.exports=router