const { db } = require("../../config/dataBase_config");

const cbCreateProd = async (req, res) => {
  try {
    let Product = {
      prod_id: req.params.id,
      name: req.params.name,
      price: req.params.price,
      discount: req.params.discount,
      prod_categ_id: req.params.prod_categ_id,
      flavor_id: req.params.flavor_id,
      size_id: req.params.size_id,
      image: req.params.image
    };
    await db.Products.create(Product);
    res.json({ err: false, payload: "product create" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbCreateProd;