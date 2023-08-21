
require('dotenv').config();
let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + "/public"));

app.get("/public", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

process.env.MESSAGE_STYLE='uppercase';

app.get("/json", (req, res) => {
    let response = 'hello json';

    if (process.env.MESSAGE_STYLE === 'uppercase') {
        response = response.toUpperCase();
    }

    res.json({
        message: response
    });
});


























 module.exports = app;
