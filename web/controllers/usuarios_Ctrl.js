const express = require("express");
const router = express.Router();
var fs = require('fs');
var path = require("path");
//Llamando al JSON
const dataPath = path.resolve(__dirname, "../data/usuarios.json")

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/", (req, res) => {
    res.render("register");
});

module.exports = router;