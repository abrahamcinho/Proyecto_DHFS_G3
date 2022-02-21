const db = require('../../config/dataBase_config');

const dsCategories_Ctrl = {
    listAll: (req, res) => {
        db.ProductsCateg.findAll()
        .then((categories) => res.status(200).json({ categories: categories }))
        .catch((e) => console.log(e));
    },
    listOne: (req, res) => {
        db.ProductsCateg.findOne({ where: { prod_categ_id: req.params.id } })
        .then((categorie) => res.status(200).json({ categorie: categorie }))
        .catch((e) => console.log(e));
    },
    updateCategorie: (req, res) => {
        db.ProductsCateg.update({
            prod_categ_id: req.params.id,
            name: req.params.name
        },
        { where: { prod_categ_id: req.params.id } })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    },
    deleteCategorie: (req, res) => {
        db.ProductsCateg.destroy({ where: { prod_categ_id: req.params.id } })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    },
    createCategorie: (req, res) => {
        db.ProductsCateg.create({
            prod_categ_id: req.params.id,
            name: req.params.name
        })
        .then(() => res.status(200))
        .catch((e) => console.log(e));
    }
}

module.exports = dsCategories_Ctrl;