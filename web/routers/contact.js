const express = require('express');
const router = express.Router();
const conctact_Ctrl = require('../controllers/conctact_Ctrl');

//Consultas
router.get('/', conctact_Ctrl.showForm);

module.exports = router;