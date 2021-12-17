const { Router } = require('express')
const router = Router();
const db = require("../db/conn")

router.post("/delete-user", (req, res) => {
    const { username } = req.body;
    console.log(req.body);
    console.log(username);
    const sql_delete = `delete from usersDetails where username="${username}";`;
    db.query(sql_delete, (err, data) => {
        if (err)
            return res.status(500).json(err);
        res.status(200).json({});
    })
})

module.exports = router;