const express = require('express');
const router = express.Router();
const login_Ctrl = require('../controllers/login_Ctrl');

//Consultas
router.get('/', login_Ctrl.showLogin);
router.post('/', login_Ctrl.reqLogin);

module.exports = router;