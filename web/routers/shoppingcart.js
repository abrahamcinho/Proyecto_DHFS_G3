const express = require('express');
const router = express.Router();
const carrito_Ctrl = require('../controllers/carrito_Ctrl');

//Consultas
router.get('/', carrito_Ctrl.listAll);
router.post('/', carrito_Ctrl.addToCart);
router.post('/:id/:prod_id', carrito_Ctrl.deleteOne);
router.put('/update/:id', carrito_Ctrl.updateCart);
router.delete('/', carrito_Ctrl.clearCart);

module.exports = router;