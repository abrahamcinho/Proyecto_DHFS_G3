const express = require('express');
const router = express.Router();
const home_Ctrl = require('../controllers/home_Ctrl');

//Consultas
router.get('/', home_Ctrl.listAll);

module.exports = router;