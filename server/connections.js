const mysql = require("mysql");

let pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    database: "devSpeak",
    password: "YES",
    user: "root",

})

module.exports.pool = pool;



// const mysql = require("mysql");
// require("./config/config")
// let pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.hostname,
//     database: process.env.database,
//     password: process.env.password,
//     // port: process.env.dbport,
//     user: process.env.username,

// })

// module.exports.pool = pool;