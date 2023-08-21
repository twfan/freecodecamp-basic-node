
require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');


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


app.get("/now", (req, res, next)=>{
    req.time =  new Date().toString()
    next();
}, ( req, res )=> {
    res.json({
        "time": req.time
    })
});


//route parameter
app.get("/:word/echo", (req, res) => {
    const {word} = req.params;
    res.json({
        "echo":word
    })
});


//query parameter
app.get("/name", (req, res) => {
    let {first:firstName, last:lastName} = req.query;

    res.json({
        "name" : `${firstName} ${lastName}`
    })
})


app.use(bodyParser.urlencoded({extended:false}));   

app.use(bodyParser.json());


















 module.exports = app;
