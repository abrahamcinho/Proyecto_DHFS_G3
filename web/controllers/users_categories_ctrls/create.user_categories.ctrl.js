const { db } = require("../../config/dataBase_config");

const cbCreateUserCateg = async (req, res) => {
  try {
    let UserCategorie = {
      users_categ_id: req.params.users_categ_id,
      name: req.params.name
    };
    await db.UsersCateg.create(UserCategorie);
    res.json({ err: false, payload: "user categorie create" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbCreateUserCateg;