const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {
    const UsersCategories = sqlize.define("users_categories", {
        users_categ_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING, allownull: false },
    });

    UsersCategories.associate = function(models) {
        UsersCategories.hasMany(models.users, { as: "userscategories", foreignKey: "users_categ_id" });
            // Las asociaciones con otros objetos deben ser definidos aquí.
    };
    return UsersCategories;
}