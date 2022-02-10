const express = require('express');
const router = express.Router();
const productos_Ctrl = require('../controllers/productos_Ctrl');

//Consultas
router.get('/', productos_Ctrl.listAllCateg);
router.get('/detail/:id', productos_Ctrl.listByProd);

//Update
router.get('/edit/:id', productos_Ctrl.modifyProd);
router.post('/edit/:id', productos_Ctrl.updateProd);

//Create
router.get('/create', productos_Ctrl.createForm);
router.post('/create', productos_Ctrl.createProd);

//Delete
router.post('/delete/:id', productos_Ctrl.deleteProd);

module.exports = router;