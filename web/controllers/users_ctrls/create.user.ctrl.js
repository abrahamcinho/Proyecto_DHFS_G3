const { models } = require("../../configs/database.config");

const cbCreateUser = async (req, res) => {
  try {
    let User = {
      user_id: req.params.id,
      first_name: req.params.first_name,
      last_name: req.params.last_name,
      email: req.params.email,
      password: req.params.password,
      avatar: req.params.avatar,
      users_categ_id: req.params.users_categ_id
    };
    await models.Users.create(User);
    res.json({ err: false, payload: "user create" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbCreateUser;