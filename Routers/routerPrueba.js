const express = require('express');
const router = express.Router();
const pruebaController = require('../Controllers/pruebaController.js');

router.get('/', pruebaController.getPrueba);
router.get('/users', pruebaController.readGetUsers);

module.exports = router;