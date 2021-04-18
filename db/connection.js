const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Truebeliever!03',
  database: 'company'
});

module.exports = db;
