const { Sequelize } = require("sequelize");
const KeyDB = require("./key.db.config");

const sqlize = new Sequelize(KeyDB.DATABASE, KeyDB.USER_NAME, KeyDB.PASSWORD, {
  host: KeyDB.HOST,
  dialect: KeyDB.DIALECT
});

const checkSqlize = async () => {
  try {
    await sqlize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

/**
 * 
 * @param {bool} switchTF
 * @example
 *  syncDB(true) => force to database / drop if exist the tables
 *  syncDB(false) => force to database / not drop if exist the tables
 */
const UsersSyncDB = async (switchTF) => {
  try {
    await Users.sync({ force: switchTF });
  } catch (err) {
      console.log("err syncDB: ", err);
  }
};

//Model users
const Users = sqlize.define("users", {
	user_id: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
	first_name: { type: Sequelize.STRING, allowNull: false },
	last_name: { type: Sequelize.STRING, allowNull: false },
	email: { type: Sequelize.STRING, allowNull: false },
	password: { type: Sequelize.STRING, allowNull: false },
	avatar: { type: Sequelize.STRING, allowNull: false },
	users_categ_id: { type: Sequelize.INTEGER, allowNull: false }
}, {
	timestamps: false
});

//Model products
const Prods = sqlize.define("products", {
	prod_id: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
	name: { type: Sequelize.STRING, allowNull: false },
	price: { type: Sequelize.INTEGER, allowNull: false },
	discount: { type: Sequelize.INTEGER, allowNull: false },
	prod_categ_id: { type: Sequelize.INTEGER, allowNull: false },
	flavor_id: { type: Sequelize.INTEGER, allowNull: false },
	size_id: { type: Sequelize.INTEGER, allowNull: false },
	image: { type: Sequelize.STRING, allowNull: false }
}, {
	timestamps: false
});


module.exports = {
  sqlize,
  Sequelize,
  models: {
    Users,
    Prods
  },
  fnUtils: {
    checkSqlize,
    UsersSyncDB
  }
};