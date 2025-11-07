const express = require('express');
const router = express.Router();
const pruebaController = require('../Controllers/pruebaController.js');

router.get('/', pruebaController.getPrueba);

module.exports = router;