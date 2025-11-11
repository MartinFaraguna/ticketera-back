const express = require('express');
const router = express.Router();
const ticketsController = require('../Controllers/ticketsController.js');

router.get('/', ticketsController.readGetTickets);

module.exports = router;