const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const auth = require('./middlewares/authUser');

//configuracion db
const db = require('./config/dataBase_config');

//configuracion db
db.sqlize.sync()
    .then(() => console.log('database connect true...'))
    .catch((e) => console.log(e));

app.use(cookieParser());
app.use('/public', express.static('public'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//settings
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(methodOverride('_method'));
app.use(session({
    secret: 'Session - Top Secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(auth);
// app.use('/login', loginCTRL);

//Router
app.use('/', require('./routers/home'));
app.use('/login', require('./routers/login'));
app.use('/productos', require('./routers/productos'));
app.use('/usuarios', require('./routers/usuarios'));
app.use('/registro', require('./routers/register'));
app.use('/categoria', require('./routers/bycategories'));
app.use('/carrito', require('./routers/shoppingcart'));
app.use('/contacto', require('./routers/contact'));

//Listen port
app.listen(3030, (req, res) => console.log('app para Sweet Dreams online...'));