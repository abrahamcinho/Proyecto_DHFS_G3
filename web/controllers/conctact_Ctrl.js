const db = require('../config/dataBase_config');

const contact_Ctrl = {
    showForm: (req, res) => {	
        db.Users.findAll()
        .then((users) => res.render('contact', { users: users }))
        .catch((e) => console.log(e));
    }
}

module.exports = contact_Ctrl;