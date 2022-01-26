const {
    DataTypes
} = require("sequelize");
module.exports = (sqlize) => {
    const FlavorsProducts = sqlize.define("flavors_products", {
        favor_prod_id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        flavor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        products_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    });

    FlavorsProducts.associate = function(models) {
        FlavorsProducts.belongsTo(models.Size, { foreignKey: 'size_id' })
        FlavorsProducts.belongsTo(models.Products, { foreignKey: 'prod_id' })

    };
    return FlavorsProducts;
};