const app = require('express')();

const port = process.env.PORT || 5000;
const router = require('./routes/db_routes/db')

app.use(router);

app.listen(port,()=>{
    console.log("server listion on port : ",port);
})
