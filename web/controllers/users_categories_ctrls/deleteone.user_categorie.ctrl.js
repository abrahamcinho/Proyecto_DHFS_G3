const { models } = require("../../configs/database.config");


const cbDeleteOneUserCateg = async (req, res) => {
  try {
    const whereUserCategIdEQ = {
      where: {
        users_categ_id: req.params.users_categ_id
      }
    };

    await models.Users_Categories.destroy(whereUserCategIdEQ);
    res.json({ err: false, payload: "delete user categorie true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbDeleteOneUserCateg;