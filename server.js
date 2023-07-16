const express = require('express');
require('./config/database')
const userRouter = require("./routes/userRoutes")
const recordRouter = require("./routes/recordRoute")

const PORT = 6450;

const app = express();

app.use(express.json());

// app.use(router)

app.get( "/test", ( req, res) => {
    res.send("User Account Verification")
})

app.use( '/api', userRouter );
app.use( '/api', recordRouter );


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})