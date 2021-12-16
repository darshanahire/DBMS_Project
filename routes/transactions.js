const { Router, response } = require("express");
const router = Router();
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
        res.status(203).json(response);
    })
})

router.post("/withdraw", (req, res) => {
    const { withdrawAmount } = req.body;
    const username = res.locals.username;
    const sqlQueryFind = `select * from usersDetails where username="${username}";`
    const sqlQueryUpdate = `update usersDetails set acc_bal=acc_bal - ${withdrawAmount} where username="${username}";`
    db.query(sqlQueryFind, (err, currUser) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        let acc_bal = currUser[0].acc_bal;
        if (acc_bal - withdrawAmount < 0)
            return res.status(400).json("insufficient balance");

        db.query(sqlQueryUpdate, (err, response) => {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }
            res.status(200).json("success")
        })

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

module.exports = router;