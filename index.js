var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
const editJsonFile = require("edit-json-file");
var stats = require(`${__dirname}/stats.json`)

let file = editJsonFile(`${__dirname}/stats.json`);
app.get('/', function(req, res){
  res.sendFile(`${__dirname}/index.html`);
});
app.get('/stats', function(req, res){
  res.sendFile(`${__dirname}/stats.json`);
});

io.on('connection', function(socket){
  var additional = stats.hourcurrent + 1;
  file.set(hourcurrent, additional);
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
