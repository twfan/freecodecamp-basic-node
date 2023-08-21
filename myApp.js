
require('dotenv').config();
let express = require('express');
let app = express();

const mySecret = process.env['MESSAGE_STYLE']


app.use("/public",express.static(__dirname + "/public"));

app.get("/public", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    let response = 'hello json';

    if (mySecret === 'uppercase') {
        response = response.toUpperCase();
    }

    res.json({
        message: response
    });
});


























 module.exports = app;
