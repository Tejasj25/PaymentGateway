const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.use(express.json());


//Route Import
const payment = require("./routes/paymentRoute");

app.use("/api/v1", payment);



module.exports = app