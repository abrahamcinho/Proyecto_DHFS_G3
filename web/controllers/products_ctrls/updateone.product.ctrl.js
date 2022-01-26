const { db } = require("../../config/dataBase_config");

const cbUpdateOneProd = async (req, res) => {
  try {
    const whereProdIdEQ = {
      where: {
        prod_id: req.params.prod_id
      }
    };

    const setChange = {
      prod_id: req.params.id,
      name: req.params.name,
      price: req.params.price,
      discount: req.params.discount,
      prod_categ_id: req.params.prod_categ_id,
      flavor_id: req.params.flavor_id,
      size_id: req.params.size_id,
      image: req.params.image
    };

    await db.Products.update(setChange, whereProdIdEQ);
    res.json({ err: false, payload: "update user true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbUpdateOneProd;