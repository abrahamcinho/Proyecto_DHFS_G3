const { models } = require("../../configs/database.config");

const cbFindAllUsersCateg = async (req, res) => {
  try {
    const users = await models.Users_Categories.findAll();
    res.render("users_categories", {
      err: false,
      payload: users
    });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindAllUsersCateg;