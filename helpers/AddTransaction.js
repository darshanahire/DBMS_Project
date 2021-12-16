const db = require("../db/conn");
const { v1: uuidv1 } = require('uuid');
const AddTransaction = (payload) => {
    return new Promise((resolve, reject) => {
        const tr_id = uuidv1();
        const body = {
            tr_id: tr_id,
            tr_username: payload.username,
            tr_type: payload.type,
            tr_amount: payload.amount
        }
        const sql_query = "INSERT INTO transactions SET ?"
        db.query(sql_query, body, (err, result) => {
            if (err)
                reject(err);
            else {
                resolve(result);
            }
        })
    })
}


function isInSufficientBalance(username, amount) {
    return new Promise((resolve, reject) => {
        const sqlQueryFind = `select * from usersDetails where username="${username}";`
        db.query(sqlQueryFind, (err, currUser) => {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }
            let acc_bal = currUser[0].acc_bal;
            if (acc_bal - amount < 0)
                return reject();
            else
                return resolve();
        })
    })
}

module.exports = { AddTransaction,isInSufficientBalance }