const { db } = require("../../config/dataBase_config");

const cbUpdateOneUserCateg = async (req, res) => {
  try {
    const whereUserCategIdEQ = {
      where: {
        users_categ_id: req.params.users_categ_id
      }
    };

    const setChange = {
      users_categ_id: req.params.users_categ_id,
	    name: req.params.name
    };

    await db.UsersCateg.update(setChange, whereUserCategIdEQ);
    res.json({ err: false, payload: "update user true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbUpdateOneUserCateg;