const db = require('../config/dataBase_config');

const carrito_Ctrl = {
    listAll: (req, res) => {	
        db.Chart.findAll({ where: { user_id: req.session.userLogged.user_id } })
        .then((carrito) => res.render('carritoDeCompras', { carrito: carrito, user: req.session.userLogged }))
        .catch((e) => console.log(e));
    }
}

module.exports = carrito_Ctrl;