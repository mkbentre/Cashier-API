var mysql = require('mysql');
// var conn = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
// });


var conn  = mysql.createPool({
    connectionLimit : 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });


// conn.connect(function(err, conn) {
//     if(err) console.log("Lỗi kết nối DATABASE");
// });
// conn.connect(function(error){
//     if(!!error) console.log(error);
//      else console.log('SQL Database Connected!');
// });
module.exports = conn;