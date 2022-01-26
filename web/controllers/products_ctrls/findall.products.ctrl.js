const { db } = require("../../config/dataBase_config");

const cbFindAllProds = async (req, res) => {
  try {
    const prods = await db.Products.findAll();
    res.render("products", {
      err: false,
      payload: prods
    });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindAllProds;