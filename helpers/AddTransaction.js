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
                return reject(err);
            }
            let acc_bal = currUser[0].acc_bal;
            if (acc_bal - amount < 0)
                return reject("Insufficient Balance !!!");
            else
                return resolve();
        })
    })
}

function DepositAmount(username, amount) {
    return new Promise((resolve, reject) => {
        const sqlDeposit = `update usersDetails set acc_bal=acc_bal+${amount} where username="${username}";`
        db.query(sqlDeposit, (err, response) => {
            if (err) return reject(err);
            const payload = {
                amount: amount,
                type: "deposit",
                username: username
            }
            AddTransaction(payload)
                .then((transactionAdded) => {
                    return resolve(transactionAdded);
                })
                .catch((err) => {
                    return reject(err);
                })
        })
    })
}

function WithdrawAmount(username, amount) {
    return new Promise((resolve, reject) => {
        const sqlQueryUpdate = `update usersDetails set acc_bal=acc_bal - ${amount} where username="${username}";`

        // balance check
        isInSufficientBalance(username, amount)
            .then((data) => {
                db.query(sqlQueryUpdate, (err, response) => {
                    if (err) return reject(err);
                    const payload = {
                        amount: amount,
                        type: "withdraw",
                        username: username
                    }
                    AddTransaction(payload)
                        .then((transactionAdded) => {
                            resolve("Withdraw Successful !!!");
                        })
                        .catch((err) => {
                            reject(err);
                        })
                })
            })
            .catch((err) => {
                reject(err);
            })
    })
}

function TransferAmount(username, userToSend, amount) {
    return new Promise((resolve, reject) => {
        WithdrawAmount(username, amount)
            .then((withdrawData) => {
                DepositAmount(userToSend, amount)
                    .then((depositData) => {
                        resolve(withdrawData, depositData);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
            .catch((err) => {
                reject(err);
            })
    })
}
module.exports = { AddTransaction, isInSufficientBalance, DepositAmount, WithdrawAmount, TransferAmount };