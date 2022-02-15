const express = require('express');
const router = express.Router();
const users_Ctrl = require('../controllers/users_Ctrl');

//Consultas
router.get('/', users_Ctrl.listAll);
router.get('/detail/:id', users_Ctrl.listOne);

//Update
router.get('/edit/:id', users_Ctrl.modifyUser);
router.post('/edit/:id', users_Ctrl.updateUser);

//Delete
router.get('/delete/:id', users_Ctrl.deleteUser);

//Create
router.get('/create', users_Ctrl.createForm);
router.post('/create', users_Ctrl.createUser);

module.exports = router;