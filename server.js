const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

// databases
require('./db/conn');

// routes 
const verify = require("./middleware/verify");
const dbRoutes = require('./routes/dbRoute')
const userRoute = require("./routes/userRoute")
const transaction = require("./routes/transactions")
const UserMe = require("./routes/me");
const ManagerRoute = require("./routes/Manager");
app.use("/api/tr", verify, transaction);
app.use("/api/auth", verify, UserMe);
app.use("/api/manager", verify, ManagerRoute);
app.use("/api/user", userRoute);
app.use("/api", dbRoutes);



app.listen(port, () => {
    console.log("server listen on port : ", port);
})
