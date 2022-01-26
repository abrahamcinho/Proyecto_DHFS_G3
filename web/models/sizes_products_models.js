const {
    DataTypes
} = require("sequelize");
module.exports = (sqlize) => {
    const SizesProducts = sqlize.define("sizes_products", {
        size_prod_id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        prod_id: {

            allowNull: false,
            type: DataTypes.INTEGER
        },
        size_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    });
    SizesProducts.associate = function(models) {
        SizesProducts.belongsTo(models.Sizes, { foreignKey: 'size_id' })
        SizesProducts.belongsTo(models.Products, { foreignKey: 'prod_id' })
    };

    return SizesProducts;
};