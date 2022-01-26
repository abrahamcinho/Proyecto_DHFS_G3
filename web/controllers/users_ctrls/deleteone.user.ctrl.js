const { db } = require("../../config/dataBase_config");

const cbDeleteOneUser = async (req, res) => {
  try {
    const whereUserIdEQ = {
      where: {
        user_id: req.params.user_id
      }
    };

    await db.Users.destroy(whereUserIdEQ);
    res.json({ err: false, payload: "delete user true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbDeleteOneUser;