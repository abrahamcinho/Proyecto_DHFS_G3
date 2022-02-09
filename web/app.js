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

const carritoCTRL = require("./controllers/carrito_Ctrl");
const homeCTRL = require("./controllers/home_Ctrl");
const loginCTRL = require("./controllers/login_Ctrl");
const registerCTRL = require("./controllers/register_Ctrl");
const productosCTRL = require("./controllers/productos_Ctrl");

app.use(auth);
app.use("/carritoDeCompras", carritoCTRL);
app.use("/", homeCTRL);
app.use("/login", loginCTRL);
app.use('/', require('./routers/main'));
// app.use('/detalleDelProducto', require('./routers/productos'));
app.use('/login', require('./routers/login'));
app.use('/carritoDeCompras', require('./routers/shoppingcart'));

//Router
app.use('/usuarios', require('./routers/usuarios'));
app.use('/registro', require('./routers/register'));
app.use('/productos', require('./routers/productos'));

//Listen port
app.listen(3030, (req, res) => { console.log("app para Sweet Dreams online...") });