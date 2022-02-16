const express = require('express');
const router = express.Router();
const register_Ctrl = require('../controllers/register_Ctrl');
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

//Create
router.get('/', register_Ctrl.selectCateg);
router.post('/', uploadFile.single('avatar'), register_Ctrl.createUser);

module.exports = router;