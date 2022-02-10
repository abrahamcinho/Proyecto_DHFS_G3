const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {
    const Flavors = sqlize.define("flavors", {
        flavor_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING, allowNull: false }
    });

    Flavors.associate = function(models) {
        Flavors.belongsToMany(models.Products, {
            as: "flavorsProd",
            through: "flavors_Products",
            foreignKey: "products_id",
        });
    };
    return Flavors;
};