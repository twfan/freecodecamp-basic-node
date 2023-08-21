
require('dotenv').config();
let express = require('express');
let app = express();


app.use("/public",express.static(__dirname + "/public"));

app.get("/public", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    let response;
    
    if (process.env.VAR_NAME === "allCaps") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }

    res.json({
        message: response
    });

    process.env.MESSAGE_STYLE
});


























 module.exports = app;
