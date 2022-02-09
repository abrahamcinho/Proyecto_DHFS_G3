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

        db.Users.findOne({ where: { email: req.body.email } })
            .then((user) => {
                user ? res.render('register', { msj: "Este email ya esta registrado" }) :
                db.Users.create({
                    first_name: req.body.nombre,
                    last_name: req.body.apellido,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: 'avatar',
                    users_categ_id: req.body.categoria
                })
                .then(() => res.redirect('login'), { msj: "Registro exitoso" })
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
    },
}

module.exports = register_Ctrl;