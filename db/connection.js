const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Truebeliever!03',
  database: 'company'
});

db.connect(function(){console.log ("Database is now connected!")})

module.exports = db;
