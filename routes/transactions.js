const { Router, response } = require("express");
const router = Router();
const { AddTransaction, isInSufficientBalance, DepositAmount, WithdrawAmount, TransferAmount } = require("../helpers/AddTransaction");
const db = require("../db/conn");

router.post("/deposit", (req, res) => {
    const { depositAmount } = req.body;
    const username = res.locals.username;
    DepositAmount(username, depositAmount)
        .then((data) => {
            res.status(202).json("Deposit Successfully");
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})


router.post("/withdraw", (req, res) => {
    const { withdrawAmount } = req.body;
    const username = res.locals.username;
    WithdrawAmount(username, withdrawAmount)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        })

})

router.post("/transfer", (req, res) => {
    const { transferAmount, userToTransfer } = req.body;
    const username = res.locals.username;
    TransferAmount(username, userToTransfer, transferAmount)
        .then((withData, depositData) => {
            res.status(202).json({ withData, depositData });
        })
        .catch((err) => {
            res.status(500).json(err);
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