const { DataTypes } = require("sequelize");
const bcryptjs = require('bcryptjs');

module.exports = (sqlize) => {

    const Users = sqlize.define("users", {
        user_id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false,
            // get(){
            //     const rawValue = this.getDataValue('password');
            //     return rawValue;
            // },
            // set(value){
            //     const salt = bcryptjs.genSaltSync(10);
            //     this.setDataValue('password', bcryptjs.hashSync(value, salt));
            // }
        },
        avatar: { type: DataTypes.STRING, allowNull: true },
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