var express = require('express');
var app = express();
require('dotenv').config()
const AuthMiddleWare = require('./app/common/AuthMiddleWare');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routers/auth.router')(app);
app.use(AuthMiddleWare.isAuth);
require('./app/routers/user.router')(app);
app.listen(process.env.PORT, function() {
    console.log("Server is started!");
});