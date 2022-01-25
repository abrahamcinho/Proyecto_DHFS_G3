const express = require("express");
//const { validationResult } = require("express-validator");
const router = express.Router();
var fs = require('fs');
var path = require("path");
//Llamando al JSON
const dataPath = path.resolve(__dirname, "../data/usuarios.json");
const bcryptjs = require("bcryptjs");

const data = require("../data/usuarios.json");

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/", (req, res) => {

    //Manejo de cookies
    if (req.body.remember) {
        var hour = 3600;
        req.session.cookie.maxAge = 14 * 24 * hour;
        res.cookie("Celeste", "algo");
    } else {
        req.session.cookie.expires = false;
    }

    //Validar email y password
    let usuario = findByField("email", req.body.email);
    if (usuario && bcryptjs.compareSync(req.body.password, usuario.password)) {
        //console.log(req.session);
        delete usuario.password;
        req.session.userLogged = usuario;
        return res.redirect("/");
    } else {
        return res.render("login");
        
    }
});


function findByField(field, text) {
    let todosLosUsuarios = findAll();
    let usuarioEncontrado = todosLosUsuarios.find(oneUser => oneUser[field] === text);
    return usuarioEncontrado;

}

function findAll() {
    return data;
}
module.exports = router;