const { models } = require("../../configs/database.config");


const cbUpdateOneUser = async (req, res) => {
  try {
    const whereUserIdEQ = {
      where: {
        user_id: req.params.user_id
      }
    };

    const setChange = {
	user_id: req.params.id,
	first_name: req.params.first_name,
	last_name: req.params.last_name,
	email: req.params.email,
	password: req.params.password,
	avatar: req.params.avatar,
	users_categ_id: req.params.users_categ_id
    };

    await models.Users.update(setChange, whereUserIdEQ);
    res.json({ err: false, payload: "update user true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbUpdateOneUser;