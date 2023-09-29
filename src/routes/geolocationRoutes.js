const express = require('express');
const router = express.Router();
const geolocationController=require('../controllers/geolocationController')

router.post('/geolocation', geolocationController.getGeolocation);


module.exports=router