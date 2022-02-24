const db = require('../config/dataBase_config');

const carrito_Ctrl = {
    listAll: (req, res) => {
        db.Chart.findAll({ where: { user_id: req.session.userLogged.user_id } })
        .then((carrito) => {
            if (carrito.prod_id !== null && carrito.prod_id !== undefined) {
                db.Products.findAll({ where: { prod_id: carrito.prod_id } })
                .then((carrito) => res.render('carritoDeCompras', { carrito: carrito, product: product, user: req.session.userLogged }))
                .catch((e) => console.log(e));
            } else {
                res.render('carritoDeCompras', { carrito: [], product: {}, user: req.session.userLogged });
            }
        })
        .catch((e) => console.log(e));
    },
    addToCart: (req, res) => {
        db.Chart.create({
            user_id: req.body.user_id,
            prod_id: req.body.prod_id,
            flavor_id: req.body.flavor_id,
            size_id: req.body.size_id,
            quantity: req.body.quantity
        })
        .then(() => res.redirect('/carrito'))
        .catch((e) => console.log(e));
    },
    updateCart: (req, res) => {
        db.Chart.update({
            user_id: req.body.user_id,
            prod_id: req.body.prod_id,
            flavor_id: req.body.flavor_id,
            size_id: req.body.size_id,
            quantity: req.body.quantity
        })
        .then(() => res.redirect('/carrito'))
        .catch((e) => console.log(e));
    },
    deleteOne: (req, res) => {
        db.Chart.destroy({ where: { user_id: req.params.id }, include: [{ prod_id: req.params.prod_id }] })
        .then(() => res.redirect('/carrito'))
        .catch((e) => console.log(e));
    },
    clearCart: (req, res) => {
        db.Chart.destroy()
        .then(() => res.redirect('/carrito'))
        .catch((e) => console.log(e));
    }
}

module.exports = carrito_Ctrl;