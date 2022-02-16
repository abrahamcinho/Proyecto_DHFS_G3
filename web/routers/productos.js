const express = require('express');
const router = express.Router();
const productos_Ctrl = require('../controllers/productos_Ctrl');
const multer = require("multer");
var path = require("path");

//configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) => { 
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const uploadFile = multer({ storage });

uploadFile.single('image');
//Consultas
router.get('/', productos_Ctrl.listAllCateg);
router.get('/detail/:id', productos_Ctrl.listByProd);

//Update
router.get('/edit/:id', productos_Ctrl.modifyProd);
router.post('/edit/:id', productos_Ctrl.updateProd);

//Create
router.get('/create', productos_Ctrl.createForm);
router.post('/create', uploadFile.single('image'),productos_Ctrl.createProd);

//Delete
router.post('/delete/:id', productos_Ctrl.deleteProd);

module.exports = router;