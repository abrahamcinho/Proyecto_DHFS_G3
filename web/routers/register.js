const express = require('express');
const router = express.Router();
const register_Ctrl = require('../controllers/register_Ctrl');

//Create
router.get('/', register_Ctrl.selectCateg);
router.post('/', register_Ctrl.createUser);

module.exports = router;