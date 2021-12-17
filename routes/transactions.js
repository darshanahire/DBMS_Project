const { Router } = require("express");
const router = Router();
const { AddTransaction, isInSufficientBalance } = require("../helpers/AddTransaction");
const db = require("../db/conn");

router.post("/deposit", (req, res) => {
    const { depositAmount } = req.body;
    const username = res.locals.username;
    const sqlQuery = `update usersDetails set acc_bal=acc_bal+${depositAmount} where username="${username}";`
    db.query(sqlQuery, (err, response) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        let payload = {
            amount: depositAmount,
            type: "deposit",
            username: username
        }
        AddTransaction(payload)
            .then((transactionAdded) => {
                res.status(203).json(response);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    })
})


router.post("/withdraw", (req, res) => {
    const { withdrawAmount } = req.body;
    const username = res.locals.username;
    const sqlQueryUpdate = `update usersDetails set acc_bal=acc_bal - ${withdrawAmount} where username="${username}";`

    // balance check
    isInSufficientBalance(username, withdrawAmount)
        .then((data) => {
            db.query(sqlQueryUpdate, (err, response) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }
                let payload = {
                    amount: withdrawAmount,
                    type: "withdraw",
                    username: username
                }
                AddTransaction(payload)
                    .then((transactionAdded) => {
                        res.status(203).json(response);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json(err);
                    })
            })
        })
        .catch((err) => {
            return res.status(400).json("insufficient balance");
        })

})

router.get("/current-balance", (req, res) => {
    const username = res.locals.username;
    const sqlQueryFind = `select * from usersDetails where username="${username}";`
    db.query(sqlQueryFind, (err, currUser) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        let acc_bal = currUser[0].acc_bal;
        res.status(200).json(acc_bal)
    })
})

router.get("/user/all", (req, res) => {
    const username = res.locals.username;
    const sqlQueryFind = `select * from transactions where tr_username="${username}";`
    db.query(sqlQueryFind, (err, result) => {
        if (err)
            return res.status(500).json(err);
        res.status(200).json(result);
    })
})

router.get("/manager/all", (req, res) => {
    const sqlQueryFind = `select * from transactions`
    db.query(sqlQueryFind, (err, result) => {
        if (err)
            return res.status(500).json(err);
        res.status(200).json(result);
    })
})

router.get("/manager/all/count", (req, res) => {
    const sqlQuery = "select count(*) from transactions";
    db.query(sqlQueryFind, (err, result) => {
        if (err)
            return res.status(500).json(err);
        res.status(200).json(result);
    })
})
module.exports = router;