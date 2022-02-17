const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {

    const Chart = sqlize.define("chart", {
        user_id: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER },
        prod_id: { allowNull: false, type: DataTypes.INTEGER },
        quantity: { allowNull: false, type: DataTypes.INTEGER }
    });
    
    Chart.associate = (models) => {
        Chart.belongsTo(models.products, {
            as: "chartproducts",
            foreignKey: "prod_id"
        });
    };
    return Chart;
};