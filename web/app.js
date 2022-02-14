const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
var cookieParser = require("cookie-parser");
const auth = require("./middlewares/authUser");

//configuracion db
const db = require("./config/dataBase_config");

//configuracion db
db.sqlize.sync()
    .then(() => console.log("database connect true..."))
    .catch((e) => console.log(e));

app.use(cookieParser());
app.use("/public", express.static("public"));

//settings
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//app.use(methodOverride("_method"));
app.use(session({
    secret: "Session - Top Secret",
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const loginCTRL = require("./controllers/login_Ctrl");

app.use(auth);
app.use("/login", loginCTRL);
app.use('/login', require('./routers/login'));

//Router
app.use('/', require('./routers/home'));
app.use('/productos', require('./routers/productos'));
app.use('/usuarios', require('./routers/usuarios'));
app.use('/registro', require('./routers/register'));
app.use('/categorie', require('./routers/bycategories'));
app.use('/carrito', require('./routers/shoppingcart'));

//Listen port
app.listen(3030, (req, res) => console.log("app para Sweet Dreams online..."));