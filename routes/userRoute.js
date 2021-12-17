const router = require('express').Router()
const db = require("../db/conn")
const jwt = require("jsonwebtoken");
const { v1: uuidv1 } = require('uuid');


router.post('/createAcc', async (req, res) => {
    const { username, password, email, mobile_no } = req.body;
    const acc_no = Math.floor(Math.random() * 1000);
    const acc_bal = 0;
    const body = { username, password, acc_no, email, mobile_no, acc_bal };
    console.log(body);
    const sql_query = 'INSERT INTO usersDetails SET ?'
    db.query(sql_query, body, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log(result);
            res.status(200).json("Account Created");
        }
    })
});

router.post('/create-manager', async (req, res) => {
    const { username, password } = req.body;
    const new_id = uuidv1();
    const body = {
        mr_id: new_id,
        mr_username: username,
        mr_password: password
    };
    const sql_query = 'INSERT INTO manager SET ?'
    db.query(sql_query, body, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log(result);
            res.status(200).json("New Manager Created");
        }
    })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const sql_query = "SELECT * FROM usersDetails WHERE username='" + username + "' AND password='" + password + "'";
    db.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("internal error");
            return;
        }
        else if (result.length === 0)
            return res.status(400).json("user not found");
        // send token
        let payload = {
            username: username,
        }
        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 });
        res.status(200).json({ "jwt": accessToken })
    })
})

router.post("/login-manager", async (req, res) => {
    const { username, password } = req.body;
    const sql_query = "SELECT * FROM manager WHERE mr_username='" + username + "' AND mr_password='" + password + "'";
    db.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("internal error");
            return;
        }
        else if (result.length === 0)
            return res.status(400).json("user not found");
        // send token
        let payload = {
            username: username,
        }
        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 });
        res.status(200).json({ "jwt": accessToken, type: "manager" });
    })
})

router.get("/all", async (req, res) => {
    const sql_query = "SELECT * FROM usersDetails";
    db.query(sql_query, {}, (err, data) => {
        res.status(200).json(data);
    })
})
module.exports = router;