const express = require('express');
const db = require('../config/dataBase_config');
const router = express.Router();
const register_Ctrl = require('../controllers/register_Ctrl');
const multer = require("multer");
var path = require("path");

//Requiero el paquete expres-validator
const {body} = require('express-validator');

//validaciones

const validations = [
    body('first_name').isLength({ min: 2}).withMessage("El nombre debe tener al menos 2 caracteres").notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('last_name').isLength({ min: 2}).withMessage("El apellido debe tener al menos 2 caracteres").notEmpty().withMessage('El campo apellido no puede estar vacío'),
    body('email')
        .notEmpty().withMessage('El campo email no puede estar vacío').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    //     //Aquí valido si eusuario existe o no en la tabla de usuarios Por el campo email)
    //     .custom(function (value) {
    //   let contador = 0;
    //   for (let i = 0; i < users.length; i++) {
    //       if (users[i].email == value) {
    //           contador++;
    //       }
    //   }
    //   if (contador > 0) {
    //       return false;   // Si retorno falso no aparece el mensaje de error
    //   } else {
    //       return true;    //Si retorno true, aparece el mensaje de error
    //   }
    // }).withMessage('El email ya se encuentra usado')
    body('password').notEmpty().withMessage('El campo contraseña no puede estar vacío').isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body('users_categ_id').notEmpty().withMessage('El campo categoria no puede estar vacío'),
    body('avatar').custom((value, {req})=>{
        let file = req.file;
        let extensionesAceptadas = ['.jpg', '.png', '.gif'];
        


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






//configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/avatars");
    },
    filename: (req, file, cb) => { 
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const uploadFile = multer({ storage });

uploadFile.single('avatar');

//Create
router.get('/', register_Ctrl.selectCateg);
router.post('/', uploadFile.single('avatar'), validations, register_Ctrl.createUser);

module.exports = router;