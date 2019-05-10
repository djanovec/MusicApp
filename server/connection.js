const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "codeJamAdmin",
    password: "Admin",
    database: "codeJam",
    port: 8889
})

module.exports.pool = pool;