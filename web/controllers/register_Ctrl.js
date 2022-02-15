const db = require('../config/dataBase_config');
var path = require("path");
const multer = require("multer");

const register_Ctrl = {
    selectCateg: (req, res) => {
        db.UsersCateg.findAll()
            .then((categories) => res.render('register', { categories: categories }))
            .catch((e) => console.log(e));
    },
    createUser: (req, res) => {
        db.Users.create({
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
            users_categ_id: req.body.categoria
        })
        .then(() => res.redirect('login'), { msj: "Registro exitoso" })
        .catch((e) => console.log(e));
    },
}

module.exports = register_Ctrl;