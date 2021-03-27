

const express = require('express');
const routes = express.Router();


const restuarantsController = require('../Controllers/RestuarantsController');


routes.get('/restuarants', restuarantsController.getAllRestuarant);
routes.post('/filter', restuarantsController.filter);


module.exports = routes; 