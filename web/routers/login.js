const express = require('express');
const router = express.Router();
const login_Ctrl = require('../controllers/login_Ctrl');
const verif = require('../middlewares/loginVerify');


//Requiero el paquete para comparar las contraseñas  que tengo hash (Pueden instalar el paquete bcrypt o bcryptjs)
const bcrypt = require('bcryptjs');
//Requiero fs ya que debo leer el archivo json de usuarios y verificar si el usuario que se está registrando existe o no
const fs = require('fs');
//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

//Requiero el paquete expres-validator
const {body} = require('express-validator');

const validations = [
    body('email').notEmpty().withMessage('El campo email no puede estar vacío').bail()
    .isEmail().withMessage("formato de email invalido").bail(),
    
    //Aquí valido si el usuario existe o no en la tabla de usuarios Por el campo email)
    //     .custom(function (value) {
    //   let contador = 0;
    //   for (let i = 0; i < users.length; i++) {
    //       if (users[i].email == value) {
    //           contador++;
    //       }
    //   }
    //   if (contador > 0) {
    //       return true;   // Si retorno falso no aparece el mensaje de error
    //   } else {
    //       return false;    //Si retorno true, aparece el mensaje de error
    //   }
    // }).withMessage('El email ya se encuentra usado'),
    body('password').notEmpty().withMessage('El campo password no puede estar vacío').bail()
    .isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres')
];
//Consultas
router.get('/', verif, login_Ctrl.showLogin);
router.post('/',validations, login_Ctrl.reqLogin);

module.exports = router;