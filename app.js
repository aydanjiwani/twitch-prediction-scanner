const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const client_id = process.env.clientId

app.use(express.static(__dirname+ '/public'));

app.get("/", function (req, res) {
    res.cookie('clientId',client_id)
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 80, function () {
    console.log("Server is running on localhost");
});

exports.client_id=client_id;