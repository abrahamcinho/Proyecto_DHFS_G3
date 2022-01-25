const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
//const method_override = require("method-override");
const multer = require("multer");
const session = require("express-session");
var cookieParser = require("cookie-parser");
const auth = require("./middlewares/authUser");

app.use(cookieParser());

app.use("/public", express.static("public"));

//settings
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//app.use(methodOverride("_method"));
app.use(session({ secret: "Session - Top Secret" }));


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//sequelize config
const { fnUtils } = require("./configs/database.config");

fnUtils.checkSqlize();
fnUtils.UsersSyncDB(false);

//Controllers
const carritoCTRL = require("./controllers/carrito_Ctrl");
const homeCTRL = require("./controllers/home_Ctrl");
const loginCTRL = require("./controllers/login_Ctrl");
const registerCTRL = require("./controllers/register_Ctrl");
const productosCTRL = require("./controllers/productos_Ctrl");

//CRUD users controllers
const cbCreateUser = require("./controllers/users_ctrl/create.user.ctrl");
const cbFindAllUsers = require("./controllers/users_ctrl/findall.users.ctrl");
const cbFindOneUser = require("./controllers/users_ctrl/findone.user.ctrl");
const cbDeleteOneUser = require("./controllers/users_ctrl/deleteone.user.ctrl");
const cbUpdateOneUser = require("./controllers/users_ctrl/updateone.user.ctrl");

//CRUD products controllers
const cbCreateProd = require("./controllers/users_ctrl/create.product.ctrl");
const cbFindAllProds = require("./controllers/users_ctrl/findall.products.ctrl");
const cbFindOneProd = require("./controllers/users_ctrl/findone.product.ctrl");
const cbDeleteOneProd = require("./controllers/users_ctrl/deleteone.product.ctrl");
const cbUpdateOneProd = require("./controllers/users_ctrl/updateone.product.ctrl");

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
app.post(UserCategAPI.CREATE_PRODUCT, cbCreateUserCateg);
app.delete(UserCategAPI.DELETE_ONE_PRODUCT, cbDeleteOneUserCateg);
app.get(UserCategAPI.FIND_ALL_PRODUCTS, cbFindAllUsersCateg);
app.get(UserCategAPI.FIND_ONE_PRODUCT, cbFindOneUserCateg);
app.put(UserCategAPI.UPDATE_ONE_PRODUCT, cbUpdateOneUserCateg);

//Listen port
app.listen(3030, (req, res) => {
    console.log("app para Sweet Dreams online...")
});