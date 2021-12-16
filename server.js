const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes/route')

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log("server listion on port : ",port);
})
