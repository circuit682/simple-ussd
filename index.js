const express = require("express");
const connectDB = require("./config");
require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.listen(port, () => {
    console.log(`server listening on ${port}`);
    connectDB
});
