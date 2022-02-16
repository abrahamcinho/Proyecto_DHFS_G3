const db = require('../config/dataBase_config');

const register_Ctrl = {
    selectCateg: (req, res) => {
        db.UsersCateg.findAll()
            .then((categories) => res.render('register', { categories: categories }))
            .catch((e) => console.log(e));
    },
    createUser: (req, res) => {
        db.Users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
<<<<<<< HEAD
            avatar: "/public/images/avatar/" + req.file.filename,
=======
            avatar: "/public/images/avatar" + req.file.filename,
>>>>>>> a346c942b9b36976b4635e8decfefe5ab3752bdf
            users_categ_id: req.body.users_categ_id
        })
        .then(() => res.redirect('login'), { msj: "Registro exitoso" })
        .catch((e) => console.log(e));
    },
}

module.exports = register_Ctrl;