const {
    DataTypes
} = require("sequelize");
module.exports = (sqlize) => {
    const Size = sqlize.define("sizes", {
        size_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING, allowNull: false }
    });

    Size.associate = function(models) {
        Size.belongsToMany(models.Products, { as: "sizesProd", through: "sizes_products", foreignKey: "prod_id" });
    };
    return Size;
};