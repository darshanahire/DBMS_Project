require("dotenv").config();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: 'Bank',
});

db.connect((err) => {
    if (err) {
        throw (err)
    }
    console.log('Database Connected...');
});

module.exports = db;