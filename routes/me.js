const { Router } = require("express")

const router = Router();
const db = require("../db/conn");
router.get("/me", async (req, res) => {
    const username = res.locals.username;
    const sql_query = `select * from usersDetails where username="${username}"`;
    db.query(sql_query, (err, data) => {
        if (err)
            return res.status(500).json("internal error");
        res.status(200).json(data[0]);
    })
})

module.exports = router;