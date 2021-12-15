const {Router} = require('express')

const router = Router()

const db = require('../../db/conn');

router.get('/createDatabase', (req, res) => {
    let sql = 'CREATE DATABASE Bank';
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send('Database created...');
    });
    console.log(res)
});

router.get('/createUsersDetailsTable', (req, res) => {
    let sql = 'CREATE TABLE usersDetails(username VARCHAR(255), password VARCHAR(255), acc_no VARCHAR(255), email VARCHAR(255), mobile_no VARCHAR(255), acc_bal VARCHAR(255), PRIMARY KEY(username))';
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            res.send(`Error occurs`);
        }
        console.log(result);
        res.send('usersDetails table created...');
    });
});

module.exports = router;