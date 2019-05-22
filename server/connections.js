const mySQL = require('mySQL');
// require('./config/config');
let pool = mySQL.createPool({
    connectoinLimit = 10,
    host: localhost,
    // database:
    // password:
    port: 8889
    // user:
})

module.exports.pool = pool;