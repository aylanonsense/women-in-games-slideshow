//set up a server
var express = require('express');
var app = express();

//serve web stuff
app.use(express.static(__dirname + '/public'));

//run server
app.listen(process.env.PORT || 3000);