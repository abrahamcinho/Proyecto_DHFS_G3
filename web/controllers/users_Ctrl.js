const db = require('../config/dataBase_config');

const users_Ctrl = {
    listAll: (req, res) => {
        db.Users.findAll()
        .then((users) => res.render('listadoUsuarios', { users: users }))
        .catch((e) => console.log(e));
    },
    listOne: (req, res) => {
        db.Users.findOne({ where: { user_id: req.params.id } })
        .then((user) => res.render('detalleUsuario', { user: user }))
        .catch((e) => console.log(e));
    }
}

module.exports = users_Ctrl;