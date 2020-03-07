const mysql = require('mysql');

const conn = mysql.createConnection({
  host : config.db.host,
  user : config.db.user,
  password : config.db.pass,
  database : config.db.name
});
 
conn.connect();

module.exports = conn;