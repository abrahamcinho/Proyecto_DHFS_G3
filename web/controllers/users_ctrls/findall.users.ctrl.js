const { models } = require("../../configs/database.config");

const cbFindAllUsers = async (req, res) => {
  try {
    const users = await models.Users.findAll();
    res.render("users", {
      err: false,
      payload: users
    });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindAllUsers;