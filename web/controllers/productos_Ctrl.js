const db = require('../config/dataBase_config');
const {validationResult} = require('express-validator');


const productos_Ctrl = {
    listAllCateg: (req, res) => {
        db.ProductsCateg.findAll()
        .then((categories) => {
            db.Products.findAll()
            .then((bycateg) => res.render('listadoProductos', { categories: categories, bycateg: bycateg, user: req.session.userLogged }))
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    },
    listByProd: (req, res) => {
        db.Products.findOne({ where: { prod_id: req.params.id } })
        .then((product) => {
            db.Flavors.findAll()
            .then((flavors) => {
                db.Sizes.findAll()
                .then((sizes) => {
                    db.Products.findAll()
                    .then((products) => {
                        const prods = products.sort(() => Math.random() - 0.5);
                        res.render('detalleDelProducto', { product: product, flavors: flavors, sizes: sizes, prods: prods, user: req.session.userLogged });});})
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    },
    modifyProd: (req, res) => {
        db.Products.findOne({ where: { prod_id: req.params.id } })
        .then((product) => {
            db.ProductsCateg.findAll()
            .then((categories) => res.render('editarProd', { product: product, categories: categories, user: req.session.userLogged }))
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    },
    updateProd: (req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            console.log('Revise el formulario');
            console.log(resultValidation.mapped());
            return  db.Products.findOne({ where: { prod_id: req.params.id } })
            .then((product) => {
                db.ProductsCateg.findAll()
                .then((categories) => res.render('editarProd', { product: product, categories: categories,errors: resultValidation.errors,
                    oldData: req.body }))
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
          }
        db.Products.update({
            
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            prod_categ_id: req.body.prod_categ_id,
            //image: "/public/images/" + req.file.filename,
            description: req.body.description
        },
        { where: { prod_id: req.params.id } })
        .catch((e) => console.log(e));
        res.redirect('/productos');
    },
    createForm: (req, res) => {
        db.ProductsCateg.findAll()
        .then((categories) => res.render('crearProd', { categories: categories, user: req.session.userLogged }))
        .catch((e) => console.log(e));
    },
    createProd: (req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            console.log('Revise el formulario')
            console.log(resultValidation.mapped())
            return  db.ProductsCateg.findAll()
            .then((categories) => res.render('crearProd', { categories: categories,
                errors: resultValidation.errors,
                oldData: req.body
            }));  
          }
        db.Products.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            prod_categ_id: req.body.prod_categ_id,
            image: "/public/images/" + req.file.filename,
            description: req.body.description
        })
        .catch((e) => console.log(e));
        res.redirect('/productos');
    },
    deleteProd: (req, res) => {
        db.Products.destroy({ where: { prod_id: req.params.id } })
        .catch((e) => console.log(e));
        res.redirect('/productos');
    }
}

module.exports = productos_Ctrl;