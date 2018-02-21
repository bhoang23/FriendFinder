//npm package dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express config a d port set up

var app = express(); 
var PORT = process.env.PORT || 3000;

//standard body parser code
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//routing response

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// standard code for listen

app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT: " + PORT);
});