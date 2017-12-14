const express = require('express');
const router = express.Router();
const beers = require('../../controllers/beersController');

router.get("/", beers.index)

module.exports = router;