const { db } = require("../../config/dataBase_config");

const cbFindAllUsersCateg = async (req, res) => {
  try {
    const users = await db.UsersCateg.findAll();
    res.render("users_categories", {
      err: false,
      payload: users
    });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindAllUsersCateg;