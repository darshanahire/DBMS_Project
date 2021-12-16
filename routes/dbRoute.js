const router = require('express').Router()
const db = require("../db/conn")

router.get('/createDatabase', (req, res) => {
    let sql_query = 'CREATE DATABASE Bank';
    db.query(sql_query, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send('Database created...');
    });
    console.log(res)
});

router.get('/createUsersDetailsTable', (req, res) => {
    let sql_query = 'CREATE TABLE usersDetails(username VARCHAR(255), password VARCHAR(255), acc_no VARCHAR(255), email VARCHAR(255), mobile_no VARCHAR(255), acc_bal INT, PRIMARY KEY(username))';
    db.query(sql_query, (err, result) => {
        if (err) {
            console.log(err)
            res.send(`Error occurs`);
        }
        console.log(result);
        res.send('usersDetails table created...');
    });
});

router.get('/create-transactions-table', (req, res) => {
    let sql_creation = `create table transactions(tr_id VARCHAR(255) NOT NULL ,tr_username VARCHAR(255),tr_type VARCHAR(255), tr_amount INT,created_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY(tr_id))`;
    db.query(sql_creation, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        res.status(200).json("table created successfully transaction");
    })
})
module.exports = router;