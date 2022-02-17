const express = require('express');
const router = express.Router();
const users_Ctrl = require('../controllers/users_Ctrl');
const multer = require("multer");
var path = require("path");

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

//Consultas
router.get('/', users_Ctrl.listAll);
router.get('/detail/:id', users_Ctrl.listOne);

//Update
router.get('/edit/:id', users_Ctrl.modifyUser);
router.post('/edit/:id', uploadFile.single('avatar'), users_Ctrl.updateUser);

//Delete
router.get('/delete/:id', users_Ctrl.deleteUser);

//Create
router.get('/create', users_Ctrl.createForm);
router.post('/create', uploadFile.single('avatar'), users_Ctrl.createUser);

module.exports = router;