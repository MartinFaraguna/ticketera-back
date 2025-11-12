const express = require('express');
const router = express.Router();
const detalleController = require('../Controllers/detalleController.js');


router.get('/', detalleController.getAllTickets);
router.get('/asignedTickets', detalleController.getAllAsignedTickets);
router.get('/unasignedTickets', detalleController.getAllUnasignedTickets);
router.get('/:id', detalleController.getDetalleID);

router.get('/usuarios', detalleController.getUsers);
router.get('/usuarios/:id', detalleController.getUserID);


module.exports = router;