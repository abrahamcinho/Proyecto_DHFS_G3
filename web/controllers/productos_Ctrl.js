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
        .then((product) => res.render('editarProd', { product: product})
        .catch((e) => console.log(e)));
    }
    // ,
    // listByCateg: (req, res) => {
    //     db.Products.findAll({ where: { prod_categ_id: req.params.id } })
    //     .then((bycateg) => res.render('categories', { bycateg: bycateg }))
    //     .catch((e) => console.log(e));
    // }
    // listByCateg: (req, res) => {
    //     db.Products.findAll({ where: { prod_categ_id: req.params.id } })
    //     .then((bycateg) => res.status(200).json({ bycateg: bycateg }))
    //     .catch((e) => console.log(e));
    // }
}

module.exports = productos_Ctrl;

// const data = require("../data/productos.json");
// const dataPath = path.resolve(__dirname, "../data/productos.json")

// //Obtener listado de productos
// router.get("/", (req, res) => { res.render("listadoProductos", { tortas: data, user: req.session.userLogged }) });

// //Detalle de un producto particular
// //router.get("/productos /: id ", (req, res) => {});
// router.get("/detalle/:id", (req, res) => {
    
//     //let productosJson = fs.readFileSync("../data/productos.json", "utf-8");
//     //let prodJS = JSON.parse(productosJson);
//     let productoID = data.filter(producto => {
//         producto.id == req.params.id;
//     });
    
//     //Abraham - lo agregue para poder leer el id del detalle de producto
//     let reqID = req.params.id;

//     res.render("detalleDelProducto", {
//         producto: data,
//         reqID: reqID,
//         user: req.session.userLogged
//     });
// }); 

// //Formulario de creación de productos
// router.get("/crear", (req, res) => {
//     if (req.session.userLogged != undefined){
//         res.render("crearProd", {
//             user: req.session.userLogged
//         });
//     }else{
//         res.render("login")
//     }
// });

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