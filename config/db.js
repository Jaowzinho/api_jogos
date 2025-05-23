const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'centerbeam.proxy.rlwy.net',
  port: 41935,
  user: 'root',
  password: 'eIdZxvQJMjuAOSodYQPQKPClPvYPIYTU',
  database: 'railway'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err.message);
    return;
  }
  console.log('Conectado ao MySQL no Railway!');
});

module.exports = db;
