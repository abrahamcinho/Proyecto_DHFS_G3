const { db } = require("../../config/dataBase_config");


const cbDeleteOneProd = async (req, res) => {
  try {
    const whereProdIdEQ = {
      where: {
        prod_id: req.params.prod_id
      }
    };

    await db.Products.destroy(whereProdIdEQ);
    res.json({ err: false, payload: "delete user true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbDeleteOneProd;