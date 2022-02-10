const express = require('express');
const router = express.Router();
const users_Ctrl = require('../controllers/users_Ctrl');

//Consultas
router.get('/', users_Ctrl.listAll);
router.get('/:id', users_Ctrl.listOne);

module.exports = router;