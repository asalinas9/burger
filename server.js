// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphdbs = require("express-handlebars");

// Open Server
var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static('public'));
app.use(express.static("public"));


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
    ;
// Handlebars
app.engine('handlebars', exphdbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);



app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});