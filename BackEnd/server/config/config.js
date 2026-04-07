const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "webmypham"
});

module.exports = db;


// kết nối database ở đây
