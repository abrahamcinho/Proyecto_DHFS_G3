const db = require('../../config/dataBase_config');

const dsProductos_Ctrl = {
    listAll: (req, res) => {
            db.Products.findAndCountAll()
            .then((products) => {
                db.Products.findAndCountAll({
                    attributes: ['prod_categ_id' ],
                        group: [ 'prod_categ_id' ]
                })
                .then((byCateg) => res.status(200).json({ byCateg: byCateg, products: products }))
                .catch((e) => console.log(e));
            })
            .catch(e => console.log(e));
    },
    listOne: (req, res) => {
        db.Products.findOne({ where: { prod_id: req.params.id } })
        .then((product) => res.status(200).json({ product: product }))
        .catch((e) => console.log(e));
    },
    updateProd: (req, res) => {
        db.Products.update({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            prod_categ_id: req.body.prod_categ_id,
            image: "/public/images/" + req.file.filename,
            description: req.body.description
        },
        { where: { prod_id: req.params.id } })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    },
    createProd: (req, res) => {
        db.Products.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            prod_categ_id: req.body.prod_categ_id,
            image: "/public/images/" + req.file.filename,
            description: req.body.description
        })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    },
    deleteProd: (req, res) => {
        db.Products.destroy({ where: { prod_id: req.params.id } })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    }
}

module.exports = dsProductos_Ctrl;