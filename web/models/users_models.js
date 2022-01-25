const {
    DataTypes
} = require("sequelize");
module.exports = (sqlize) => {
    const Users = sqlize.define("users", {
        user_id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        users_categ_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    });
    Users.associate = function(models) {
        Users.belongsTO(models.UsersCategories, {
                as: "categoriasUsuario",
                foreignKey: "users_categ_id"
            })
            // Las asociaciones con otros objetos deben ser definidos aquí.
    };
    return Users;

};