// const express = require("express");
// const router = express.Router();
// var fs = require('fs');
// var path = require("path");

const db = require('../config/dataBase_config');

const productos_Ctrl = {
    listAllCateg: (req, res) => {
        db.ProductsCateg.findAll()
        .then((categories) => {
            db.Products.findAll()
            .then((bycateg) => res.render('listadoProductos', { categories: categories, bycateg: bycateg }))
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
                .then((sizes) => res.render('detalleDelProducto', { product: product, flavors: flavors, sizes: sizes }))
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
            .then((categories) => res.render('editarProd', { product: product, categories: categories }))
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    },
    updateProd: (req, res) => {
        db.Products.update({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            prod_categ_id: req.body.prod_categ_id,
            image: req.body.image,
            description: req.body.description
        },
        { where: { prod_id: req.params.id } })
        .catch((e) => console.log(e));
        res.redirect('/productos');
    },
    createForm: (req, res) => {
        db.ProductsCateg.findAll()
        .then((categories) => res.render('crearProd', { categories: categories }))
        .catch((e) => console.log(e));
    },
    createProd: (req, res) => {
        db.Products.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            prod_categ_id: req.body.prod_categ_id,
            image: req.body.image,
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

// UPDATE `sweetdreams`.`products` SET `price` = '1450', `discount` = '20' WHERE (`prod_id` = '10');


module.exports = productos_Ctrl;



// //Acción de creación(a donde se envía el formulario)
// router.post("/crear", (req, res) => {
    
//     // let productosJson = data; //fs.readFile("../data/productos.json", "utf-8");
//     // let prodJS = JSON.parse(productosJson);
//     let producto = {
//         id: data[data.length - 1].id + 1,
//         nombre: req.body.nombre,
//         precio: req.body.precio,
//         descuento: req.body.descuento,
//         descripcion: req.body.descripcion,
//         categoria: req.body.categoria,
//         relleno_1: req.body.relleno_1,
//         relleno_2: req.body.relleno_2,
//         relleno_3: req.body.relleno_3,
//         porcion_1: req.body.porcion_1,
//         porcion_2: req.body.porcion_2,
//         porcion_3: req.body.porcion_3
//     };
//     data.push(producto);
//     var prodJson = JSON.stringify(data);
//     fs.writeFileSync(dataPath, prodJson);
//     res.redirect("/productos");
// });

// //Formulario de edición de productos
// //router.get("/productos/: id/edit", (req, res) => {
// //});
// router.get("/editar", (req, res) => {
//     res.render("editarProd", {
//         user: req.session.userLogged
//     })
// });

// //Acción de edición(a donde se envía el formulario)
// router.put("/editar/:id", (req, res) => {
//     //writeFIleSInc
// });

// //Acción de borrado
// router.delete("/eliminars/: id", (req, res) => {
//     let producto = req.body.producto;
//     data = data.filter(m => m !== producto);

// })

// module.exports = router;