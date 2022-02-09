const express = require('express');
const router = express.Router();
const home_Ctrl = require('../controllers/home_Ctrl');

//Consultas
router.get('/', home_Ctrl.listAll);
router.get('/', (req, res) => res.render('home', { user: req.session.userLogged }));

module.exports = router;