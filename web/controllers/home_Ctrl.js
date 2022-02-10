const db = require('../config/dataBase_config');

const home_Ctrl = {
	listAll: (req, res) => {
		db.ProductsCateg.findAll()
		.then((categories) => res.render('home', { categories: categories}))
		.catch((e) => console.log(e));
	}
};

module.exports = home_Ctrl;