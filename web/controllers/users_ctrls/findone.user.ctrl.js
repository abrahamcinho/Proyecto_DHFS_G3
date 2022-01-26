const { models } = require("../../configs/database.config");


const cbFindOneUser = async (req, res) => {
  try {
    const whereUserIdEQ = {
      where: {
        user_id: req.params.user_id
      }
    };

    const users = await models.Users.findOne(whereUserIdEQ);
    res.json({ err: false, payload: users });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindOneUser;