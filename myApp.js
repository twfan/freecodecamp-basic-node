
require('dotenv').config();
let express = require('express');
let app = express();


app.use(function middleware(req, res, next) {
    let string = `${req.method} ${req.path} - ${req.ip}`;
    console.log(string);
    next();
})

app.use("/public",express.static(__dirname + "/public"));

app.get("/public", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    let response = 'Hello json'
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({
            "message": response.toUpperCase()
        });
    } else {
        res.json({
            "message": response
        });
    }
});


























 module.exports = app;
