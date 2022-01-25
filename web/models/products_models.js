const {
    DataTypes
} = require("sequelize");
module.exports = (sqlize) => {
    const Products = sqlize.define("products", {
        prod_id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prod_categ_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // flavor_id: { type: Types.INTEGER, foreignKey: true },
        // size_id: { type: Types.INTEGER, foreignKey: true },

    }, );

    Products.associate = function(models) {
        Products.belongsTo(models.Productsategories, {
            as: "categoriasProd",
            foreignKey: "prod_categ_id"
        })


        Products.belongsToMany(models.sizes, {
            as: "sizesProd",
            through: "sizes_products",
            foreignKey: "size_id"

        })


        Products.belongsToMany(models.favors, {
            as: "flavorsProd",
            through: "flavors_Products",
            foreignKey: "flavor_id",
        })

    };

    return Products;
};