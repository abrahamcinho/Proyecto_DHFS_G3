const express = require("express");
const router = express.Router();
var fs = require('fs');
var path = require("path");
//Llamando al JSON
const data = require("../data/usuarios.json");
const dataPath = path.resolve(__dirname, "../data/usuarios.json")
const bcryptjs = require("bcryptjs");
const multer = require("multer");

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

router.get("/", (req, res) => res.render("register"));

//Registro de Usuario
router.post("/", uploadFile.single("avatar"), (req, res) => {
    let usuario = findByField("email", req.body.email);
    if (usuario) {
        return res.render("register", {
            errors: {
                email: {
                    msj: "Este email ya esta registrado"
                }
            },
            oldData: req.body
        });
    } else {
        usuario = {
            id: data[data.length - 1].id + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            //password: req.body.password,
            password: bcryptjs.hashSync(req.body.password, 10),
            category: req.body.category,
            avatar: req.file.filename
        };

        data.push(usuario);
        var prodJson = JSON.stringify(data);
        fs.writeFileSync(dataPath, prodJson);
        //res.send("Registro Exitoso")
        res.redirect("/login");
    }
});

function findByField(field, text) {
    let todosLosUsuarios = findAll();
    let usuarioEncontrado = todosLosUsuarios.find(oneUser => oneUser[field] === text);
    return usuarioEncontrado;
}

function findAll() {
    return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
}

module.exports = router;