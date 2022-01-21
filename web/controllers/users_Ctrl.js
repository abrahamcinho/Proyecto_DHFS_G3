const express = require("express");
const router = express.Router();
var fs = require('fs');
var path = require("path");

const user = require("../user/usuarios.json");
const userPath = path.resolve(__dirname, "../user/usuarios.json");

//Obtener listado de usuarios
router.get("/", (req, res) => {
    res.render("listadoUsuarios", {
        usuario: user
    });
});

//Detalle de un usuario particular
//router.get("/usuarios /: id ", (req, res) => {});
router.get("/usuario/:id", (req, res) => {
    
    //let usuariosJson = fs.readFileSync("../user/usuarios.json", "utf-8");
    //let userJS = JSON.parse(usuariosJson);
    let usuarioID = user.filter(user => {
        user.id == req.params.id;
    });
    
    //Abraham - lo agregue para poder leer el id del detalle de usuario
    let reqID = req.params.id;

    res.render("detalleUsuario", {
        usuario: user,
        reqID: reqID,
    });
});

//Formulario de edición de usuarios
//router.get("/usuarios/:id/edit", (req, res) => {});
router.get("/editar", (req, res) => res.render("editarUser"));

//Acción de edición(a donde se envía el formulario)
router.put("/editar/:id", (req, res) => {
    let user = JSON.parse(fs.readFileSync(user));
    let idUser = req.params.id;

    let userEdit = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        category: req.body.categoria
    };

    user[idUser] = userEdit;
    const userToString = JSON.stringify(user);

    fs.writeFileSync(user, userToString);
    res.redirect("/usuarios");
});

//Acción de borrado
router.delete("/eliminar/:id", (req, res) => {
    let users = JSON.parse(fs.readFileSync(users));
    let idUser = req.params.id;
    
    users = users.filter(({ id }) => id !== idUser);
    const userToString = JSON.stringify(users);
    
    fs.writeFileSync(user, userToString);
    res.redirect("/usuarios");
})

module.exports = router;