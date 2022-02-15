const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {

    const Chart = sqlize.define("chart", {
        user_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        avatar: { type: DataTypes.STRING, allowNull: false },
        users_categ_id: { allowNull: false, type: DataTypes.INTEGER, }
    });
    
    Chart.associate = (models) => {
        Chart.belongsTo(models.products, {
            as: "chartproducts",
            foreignKey: "prod_id"
        });
    };
    return Chart;
};