require('dotenv').config;

let express = require('express');
let app = express();


app.use("/public",express.static(__dirname + "/public"));

app.get("/public", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    let response = (process.env.MESSAGE_STYLE == 'uppercase') ? response = 'hello json'.toUpperCase() : response = 'hello json';

    res.json({
        message: response;
    });
});


























 module.exports = app;
