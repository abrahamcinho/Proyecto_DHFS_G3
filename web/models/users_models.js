const { DataTypes } = require("sequelize");

module.exports = (sqlize) => {

    const Users = sqlize.define("users", {
        user_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        avatar: { type: DataTypes.STRING, allowNull: false },
        users_categ_id: { allowNull: false, type: DataTypes.INTEGER, }
    });
    
    Users.associate = (models) => {
        Users.belongsTo(models.users_categories, {
            as: "usersCategories",
            foreignKey: "users_categ_id"
        });
    };
    return Users;
};