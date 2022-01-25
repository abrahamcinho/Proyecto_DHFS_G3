const { models } = require("../../configs/database.config");


const cbFindOneUserCateg = async (req, res) => {
  try {
    const whereUserCategIdEQ = {
      where: {
        users_categ_id: req.params.users_categ_id
      }
    };

    const userscateg = await models.Users_Categories.findOne(whereUserCategIdEQ);
    res.json({ err: false, payload: userscateg });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindOneUserCateg;