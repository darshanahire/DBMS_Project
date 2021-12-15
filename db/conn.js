const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Bank',
});

db.connect((err) => {
    if (err) {
        throw(err)
    }
    console.log('Database Connected...');
});

module.exports = db;