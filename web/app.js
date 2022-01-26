const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
//const method_override = require("method-override");
const multer = require("multer");
const session = require("express-session");
var cookieParser = require("cookie-parser");
const auth = require("./middlewares/authUser");
//configuracion db
const db = require("./config/dataBase_config");

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

//configuracion db
db.sqlize.sync()
    .then(() => console.log("database connect true..."))
    .catch(() => console.log("database connect false..."));

const carritoCTRL = require("./controllers/carrito_Ctrl");
const homeCTRL = require("./controllers/home_Ctrl");
const loginCTRL = require("./controllers/login_Ctrl");
const registerCTRL = require("./controllers/register_Ctrl");
const productosCTRL = require("./controllers/productos_Ctrl");

//CRUD users controllers
const cbCreateUser = require("./controllers/users_ctrls/create.user.ctrl");
const cbFindAllUsers = require("./controllers/users_ctrls/findall.users.ctrl");
const cbFindOneUser = require("./controllers/users_ctrls/findone.user.ctrl");
const cbDeleteOneUser = require("./controllers/users_ctrls/deleteone.user.ctrl");
const cbUpdateOneUser = require("./controllers/users_ctrls/updateone.user.ctrl");

//CRUD products controllers
const cbCreateProd = require("./controllers/products_ctrls/create.product.ctrl");
const cbFindAllProds = require("./controllers/products_ctrls/findall.products.ctrl");
const cbFindOneProd = require("./controllers/products_ctrls/findone.product.ctrl");
const cbDeleteOneProd = require("./controllers/products_ctrls/deleteone.product.ctrl");
const cbUpdateOneProd = require("./controllers/products_ctrls/updateone.product.ctrl");

//CRUD users categories controllers
const cbCreateUserCateg = require("./controllers/users_categories_ctrls/create.user_categories.ctrl");
const cbDeleteOneUserCateg = require("./controllers/users_categories_ctrls/deleteone.user_categorie.ctrl");
const cbFindAllUsersCateg = require("./controllers/users_categories_ctrls/findall.users_categories.ctrl");
const cbFindOneUserCateg = require("./controllers/users_categories_ctrls/findone.user_categorie.ctrl");
const cbUpdateOneUserCateg = require("./controllers/users_categories_ctrls/updateone.user_categorie.ctrl");

//tag endpoints
const UserAPI = require("./tag_endpoints/users.api");
const ProductsAPI = require("./tag_endpoints/products.api");
const UserCategAPI = require('./tag_endpoints/user_categories.api');

app.use(auth);
app.use("/carritoDeCompras", carritoCTRL);
app.use("/", homeCTRL);
app.use("/login", loginCTRL);
app.use("/registro", registerCTRL);
app.use("/productos", productosCTRL);
app.use('/', require('./routers/main'));
app.use('/detalleDelProducto', require('./routers/productos'));
app.use('/login', require('./routers/login'));
app.use('/registro', require('./routers/register'));
app.use('/carritoDeCompras', require('./routers/shoppingcart'));

//CRUD users endpoints
app.post(UserAPI.CREATE_USER, cbCreateUser);
app.delete(UserAPI.DELETE_ONE_USER, cbDeleteOneUser);
app.get(UserAPI.FIND_ALL_USERS, cbFindAllUsers);
app.get(UserAPI.FIND_ONE_USER, cbFindOneUser);
app.put(UserAPI.UPDATE_ONE_USER, cbUpdateOneUser);

//CRUD products endpoints
app.post(ProductsAPI.CREATE_PRODUCT, cbCreateProd);
app.delete(ProductsAPI.DELETE_ONE_PRODUCT, cbDeleteOneProd);
app.get(ProductsAPI.FIND_ALL_PRODUCTS, cbFindAllProds);
app.get(ProductsAPI.FIND_ONE_PRODUCT, cbFindOneProd);
app.put(ProductsAPI.UPDATE_ONE_PRODUCT, cbUpdateOneProd);

//CRUD users categories endpoints
app.post(UserCategAPI.CREATE_USER_CATEGORIES, cbCreateUserCateg);
app.delete(UserCategAPI.DELETE_ONE_USER_CATEGORIES, cbDeleteOneUserCateg);
app.get(UserCategAPI.FIND_ALL_USERS_CATEGORIES, cbFindAllUsersCateg);
app.get(UserCategAPI.FIND_ONE_USER_CATEGORIES, cbFindOneUserCateg);
app.put(UserCategAPI.UPDATE_ONE_USER_CATEGORIES, cbUpdateOneUserCateg);

//Listen port
app.listen(3030, (req, res) => {
    console.log("app para Sweet Dreams online...")
});