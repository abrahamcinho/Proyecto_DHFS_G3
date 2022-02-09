const express = require('express');
const router = express.Router();
const productos_Ctrl = require('../controllers/productos_Ctrl');

//Consultas
router.get('/', productos_Ctrl.listAllCateg);
router.get('/detail/:id', productos_Ctrl.listByProd);
router.get('/edit/:id', productos_Ctrl.modifyProd);

module.exports = router;