// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.send('<form method="post" action="/formsubmit"> <input name="email" type="email"> <input type="submit"></form>')
});
app.post('/formsubmit', function(req, res){
	res.redirect('/sucess')
});
app.get('/sucess', function(req, res){
	res.send('You have entered an invalid e-mail. <br> The System would like to know if you are mentally challenged <form method="post" action="/submit"> <input name="email" type="email"> <input type="submit"></form>')

})
app.post('/submit', function(req, res){
	res.redirect('/submit')
});

app.get('/submit', function(req, res){
	res.send('Whoop Whoop')

})
// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})