const { models } = require("../../configs/database.config");

const cbFindAllProds = async (req, res) => {
  try {
    const prods = await models.Prods.findAll();
    res.render("products", {
      err: false,
      payload: prods
    });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindAllProds;