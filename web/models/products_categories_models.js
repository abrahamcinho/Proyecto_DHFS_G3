const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {
    const ProductsCategories = sqlize.define("products_categories", {
        prod_categ_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING }
    });

    ProductsCategories.associate = function(models) {
        // Las asociaciones con otros objetos deben ser definidos aquí.
        ProductsCategories.hasMany(models.Products, { as: "categoriaProduct",
        foreignKey: "prod_categ_id" });
    };
    return ProductsCategories;
}