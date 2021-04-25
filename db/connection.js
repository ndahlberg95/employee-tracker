const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'company'
});

db.connect(function(){console.log ("Database is now connected!")})

module.exports = db;
