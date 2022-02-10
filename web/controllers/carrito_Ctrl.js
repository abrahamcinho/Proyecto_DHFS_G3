const express = require("express");
const router = express.Router();

router.get("/", (req, res) => { res.render("carritoDeCompras", { user: req.session.userLogged }); });

module.exports = router;