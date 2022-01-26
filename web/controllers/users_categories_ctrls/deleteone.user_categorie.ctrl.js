const { db } = require("../../config/dataBase_config");

const cbDeleteOneUserCateg = async (req, res) => {
  try {
    const whereUserCategIdEQ = {
      where: {
        users_categ_id: req.params.users_categ_id
      }
    };

    await db.UsersCateg.destroy(whereUserCategIdEQ);
    res.json({ err: false, payload: "delete user categorie true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbDeleteOneUserCateg;