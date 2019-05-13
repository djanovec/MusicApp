const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "process.env.sql9.freemysqlhosting.net",
    database: "process.env.sql9291340",
    password: "process.env.tpxD2T4wuz",
    port: "process.env.3306",
    user: "process.env.sql9291340",
    
    
    
    

})

module.exports.pool = pool;