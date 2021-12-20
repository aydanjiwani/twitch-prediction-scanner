const express = require("express");
var session = require('express-session')

const app = express();
app.use(session({
    secret : 'somesecret',
    key : 'sid',
    proxy : true, // add this when behind a reverse proxy, if you need secure cookies
    cookie : {
        secure : true,
        maxAge: 5184000000 // 2 months
    }
}));
const dotenv = require("dotenv").config();
const client_id = process.env.clientId
const redirect_uri = process.env.redirectURI

app.use(express.static(__dirname+ '/public'));

app.get("/", function (req, res) {
    res.cookie('clientId',client_id)
    res.cookie('redirectURI',redirect_uri)
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 80, function () {
    console.log("Server is running on localhost");
});
