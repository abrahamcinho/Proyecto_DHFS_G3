const { Sequelize } = require("sequelize");

let db = {};

const sqlize = new Sequelize('sweetdreams', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    define: { timestamps: false },
    logging: false
});

db.Sequelize = Sequelize;
db.sqlize = sqlize;

db.Users = require("../models/users_models")(sqlize, Sequelize);
db.Products = require("../models/products_models")(sqlize, Sequelize);
db.ProductsCateg = require("../models/products_categories_models")(sqlize, Sequelize);
db.Flavors = require("../models/flavors_models")(sqlize, Sequelize);
db.FlavorsProd = require("../models/flavors_products_models")(sqlize, Sequelize);
db.Sizes = require("../models/sizes_models")(sqlize, Sequelize);
db.SizeProd = require("../models/sizes_products_models")(sqlize, Sequelize);
db.UsersCateg = require("../models/users_categories_models")(sqlize, Sequelize);
db.Chart = require("../models/chart_models")(sqlize, Sequelize);

module.exports = db;