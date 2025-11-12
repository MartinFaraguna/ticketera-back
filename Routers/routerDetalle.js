const express = require('express');
const router = express.Router();
const detalleController = require('../Controllers/detalleController.js');


router.get('/', detalleController.getAllTickets);
router.get('/asignedTickets', detalleController.getAllAsignedTickets);
router.get('/unasignedTickets', detalleController.getAllUnasignedTickets);
router.get('/:id', detalleController.getDetalle);


module.exports = router;