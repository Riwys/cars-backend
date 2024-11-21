const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/carsController');

router.post('/', moviesController.getCars);

module.exports = router;