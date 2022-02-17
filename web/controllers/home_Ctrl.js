const db = require('../config/dataBase_config');

const home_Ctrl = {
	listAll: (req, res) => {
		db.ProductsCateg.findAll()
		.then((categories) => {
			db.Products.findAll()
			.then((products) => {
				const prods = products.sort(() => Math.random() - 0.5);
				const prod = products.sort(() => Math.random() * 9);
				res.render('home', { categories: categories, products: products, prods: prods, prod: prod, user: req.session.userLogged });
			})
			.catch((e) => console.log(e));	
		})
		.catch((e) => console.log(e));
	}
};

module.exports = home_Ctrl;