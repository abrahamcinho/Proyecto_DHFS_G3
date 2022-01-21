const { models } = require("../../configs/database.config");


const cbFindOneProd = async (req, res) => {
  try {
    const whereProdIdEQ = {
      where: {
        prod_id: req.params.prod_id
      }
    };

    const prods = await models.Prods.findOne(whereProdIdEQ);
    res.json({ err: false, payload: prods });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindOneProd;