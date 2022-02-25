const db = require('../../config/dataBase_config');

const dsUsers_Ctrl = {
    listAll: (req, res) => {
        db.Users.findAndCountAll( {
            attributes: ['user_id', 'first_name', 'email' ]
        })
        .then((users) => res.status(200).json({ users: users }))
        .catch((e) => console.log(e));
    },
    listOne: (req, res) => {
        db.Users.findOne({ where: { user_id: req.params.id },
            attributes: ['user_id', 'first_name', 'last_name', 'email', 'avatar' ]
        })
        .then((user) => res.status(200).json({ user: user }))
        .catch((e) => console.log(e));
    },
    updateUser: (req, res) => {
        db.Users.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            avatar: '/public/images/avatar/' + req.file.filename,
            users_categ_id: req.body.users_categ_id
        },
        { where: { user_id: req.params.id } })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    },
    deleteUser: (req, res) => {
        db.Users.destroy({ where: { user_id: req.params.id } })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    },
    createUser: (req, res) => {
        db.Users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            avatar: '/public/images/avatar/' + req.file.filename,
            users_categ_id: req.body.users_categ_id
        })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    }
}

module.exports = dsUsers_Ctrl;