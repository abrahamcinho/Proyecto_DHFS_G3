const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {

    const Chart = sqlize.define("chart", {
        user_id: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER },
        prod_id: { allowNull: false, type: DataTypes.INTEGER },
        flavor_id: { allowNull: false, type: DataTypes.INTEGER },
        size_id: { allowNull: false, type: DataTypes.INTEGER },
        quantity: { allowNull: false, type: DataTypes.INTEGER }
    });
    
    Chart.associate = (models) => { Chart.belongsTo(models.products, { as: "chartproducts", foreignKey: "prod_id" });};
    Chart.associate = (models) => { Chart.belongsTo(models.flavors, { as: "chartflavors", foreignKey: "flavor_id" });};
    Chart.associate = (models) => { Chart.belongsTo(models.sizes, { as: "chartsizes", foreignKey: "size_id" });};
    return Chart;
};