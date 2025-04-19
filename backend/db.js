// db.js (CommonJS)
import mysql2 from 'mysql2';

// Cria a conexão
export const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Oportunity23#',
  database: 'trabalho01'
});

