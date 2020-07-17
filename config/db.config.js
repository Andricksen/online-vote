'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mmg'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connexion reussi");
});
module.exports = dbConn;