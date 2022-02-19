const db = require('../config/dataBase_config');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const login_Ctrl = {
    showLogin: (req, res) => {
        db.Users.findAll()
        .then((users) => res.render('login'))
        .catch((e) => console.log(e));
    },
    reqLogin: (req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            console.log('Revise el formulario')
            console.log(resultValidation.mapped())
            return res.render('login', { 
                errors: resultValidation.errors,
                oldData: req.body
            });  
          }
        //Manejo de cookies
        if (req.body.remember) {
            var hour = 3600;
            req.session.cookie.maxAge = 14 * 24 * hour;
            res.cookie('remember_me', 'logincookie');
        } else {
            req.session.cookie.expires = false;
        }
        db.Users.findOne({ where: { email: req.body.email } })
        .then(user => {
            // If not exist, return error message
            if(!user){
                // Create error message
                var error = {param: "email", msg: "El email ingresado no existe", value: req.body.email};
                // Add to validator errors
                resultValidation.errors.push(error);
                res.render('login',{ 
                    errors: resultValidation.errors,
                    oldData: req.body
                });  
            }
            else if (user && bcryptjs.compareSync(req.body.password, user.password)) {
                delete user.password;
                req.session.userLogged = user;
                res.redirect('/');
            } else {
                // Create error message
                var error = {param: "email", msg: "La contraseña ingresada no es válida", value: req.body.email};
                // Add to validator errors
                resultValidation.errors.push(error);
                res.render('login',{ 
                    errors: resultValidation.errors,
                    oldData: req.body
                });  
            }
        })
        .catch((e) => console.log(e));
    }
}

module.exports = login_Ctrl;