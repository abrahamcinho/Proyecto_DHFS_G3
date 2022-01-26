const { db } = require("../../config/dataBase_config");


const cbFindOneProd = async (req, res) => {
  try {
    const whereProdIdEQ = {
      where: {
        prod_id: req.params.prod_id
      }
    };

    const prods = await db.Products.findOne(whereProdIdEQ);
    res.json({ err: false, payload: prods });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindOneProd;