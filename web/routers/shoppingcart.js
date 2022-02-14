const express = require('express');
const router = express.Router();
const carrito_Ctrl = require('../controllers/carrito_Ctrl');

//Consultas
router.get('/', carrito_Ctrl.listAll);

module.exports = router;