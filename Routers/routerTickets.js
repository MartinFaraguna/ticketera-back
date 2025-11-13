const express = require('express');
const router = express.Router();
const ticketsController = require('../Controllers/ticketsController.js');

router.get('/', ticketsController.readGetTickets);
router.post('/', ticketsController.crear);
router.get('/filtrados', ticketsController.readFilteredTickets);
module.exports = router;