const db = require('../config/dataBase_config');
const bcrypt = require("bcryptjs");
const {validationResult} = require('express-validator');

const register_Ctrl = {
    selectCateg: (req, res) => {
        db.UsersCateg.findAll()
            .then((categories) => res.render('register', { categories: categories, user: req.session.userLogged }))
            .catch((e) => console.log(e));
    },
    createUser: (req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            console.log('Revise el formulario');
            console.log(resultValidation.mapped());
            return db.UsersCateg.findAll()
            .then((categories) => res.render('register', { categories: categories,
                errors: resultValidation.errors,
                oldData: req.body
            }));  
          }
          
        db.Users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync('req.body.password', 10),
            avatar: "/public/images/avatar" + req.file.filename,
            users_categ_id: req.body.users_categ_id
        })
        
        .then(() => res.redirect('login'), { msj: "Registro exitoso" })
        .catch((e) => console.log(e));
    },
}

module.exports = register_Ctrl;