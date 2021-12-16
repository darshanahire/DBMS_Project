const router = require('express').Router()
const db = require('../db/conn');

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
    let sql_query = 'CREATE TABLE usersDetails(username VARCHAR(255), password VARCHAR(255), acc_no INT, email VARCHAR(255), mobile_no VARCHAR(255), acc_bal INT, PRIMARY KEY(username))';
    db.query(sql_query, (err, result) => {
        if (err) {
            console.log(err)
            res.send(`Error occurs`);
        }
        console.log(result);
        res.send('usersDetails table created...');
    });
});

router.post('/createAcc', async (req, res) => {
    const { username, password, email, mobile_no } = req.body;
    const acc_no = Math.floor(Math.random() * 100000000000);
    const acc_bal = 0;
    const body = { username, password, acc_no, email, mobile_no, acc_bal };
    const sql_query = 'INSERT INTO usersDetails SET ?'
    db.query(sql_query, body, (err, result) => {
        if (err)
            throw err;
        else {
            console.log(result);
            res.status(200).json("Account Created");
        }
    })
});

module.exports = router;