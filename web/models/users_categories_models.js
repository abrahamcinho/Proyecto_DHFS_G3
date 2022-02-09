const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {
    const UsersCategories = sqlize.define("usersCategories", {
        users_categ_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING, allownull: false },

    });
    UsersCategories.associate = function(models) {
        UsersCategories.hasMany(models.users, {
                as: "usersCategories",
                foreignKey: "users_categ_id"
            })
            // Las asociaciones con otros objetos deben ser definidos aquí.
    };
    return UsersCategories;
}