const express = require('express');
const router = express.Router();
const productos_Ctrl = require('../controllers/productos_Ctrl');
const multer = require("multer");
var path = require("path");

//Requiero el paquete expres-validator
const {body} = require('express-validator');

//validaciones
const validations = [
    body('name').isLength({ min: 5}).withMessage("El nombre debe tener al menos 5 caracteres").bail()
    .notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('description').isLength({ min:20 }).withMessage("La descripción debe tener menos de 20 caracteres"),
    
    body('image').custom((value, {req})=>{
        let file = req.file;
        let extensionesAceptadas = ['.jpg', '.jpeg','.png', '.gif'];
        


        if(!file){
            throw new Error("Tienes que subir una imagen");
        }else{
            let fileExtension = path.extname(file.originalname);
                if(!extensionesAceptadas.includes(fileExtension)){
            throw new Error(`Las extensiones de archivo permitidas son ${extensionesAceptadas.join(', ')}`);
        }
    }


    
        return true;
   })
];


const validationsUpdate = [
    body('name').isLength({ min: 5}).withMessage("El nombre debe tener al menos 5 caracteres").bail()
    .notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('description').isLength({ min:20 }).withMessage("La descripción debe tener menos de 20 caracteres"),
    
    
];


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
router.post('/edit/:id',uploadFile.single('image'), validationsUpdate , productos_Ctrl.updateProd);

//Create
router.get('/create', productos_Ctrl.createForm);
router.post('/create', uploadFile.single('image'),validations, productos_Ctrl.createProd);

//Delete
router.post('/delete/:id', productos_Ctrl.deleteProd);

module.exports = router;