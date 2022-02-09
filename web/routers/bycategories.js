const express = require('express');
const router = express.Router();
const bycategories_Ctrl = require('../controllers/bycategories_Ctrl');

//Consultas
router.get('/:id', bycategories_Ctrl.listByCateg);

module.exports = router;