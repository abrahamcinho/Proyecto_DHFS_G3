const db = require('../config/dataBase_config');

const bycategories_Ctrl = {
	listByCateg: (req, res) => {
		db.ProductsCateg.findOne({ where: { prod_categ_id: req.params.id } })
		.then((categorie) => {
			db.Products.findAll({ where: { prod_categ_id: req.params.id }})
			.then((products) => res.render('byCategories', { categorie: categorie, products: products, user: req.session.userLogged }))
			.catch((e) => console.log(e));
		})
		.catch((e) => console.log(e));
	}
}

module.exports = bycategories_Ctrl;