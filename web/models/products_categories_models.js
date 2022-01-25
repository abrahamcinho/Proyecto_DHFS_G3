const {
    DataTypes
} = require("sequelize");
module.exports = (sqlize) => {
    const ProductsCategories = sqlize.define("products_categories", {
        products_categ_id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: { type: DataTypes.STRING },

    });
    ProductsCategories.associate = function(models) {
        ProductsCategories.hasMany(models.Products, {
                as: "categoriaProduct"
            })
            // Las asociaciones con otros objetos deben ser definidos aquí.
    };
    return ProductsCategories;
}