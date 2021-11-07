var express = require('express');
var app = express();
const path = require('path');
const { cwd, nextTick } = require('process');
var http = require('http').Server(app);

app.use(express.static(path.join(process.cwd(), 'public')));


app.get('/', function(req, res){
	res.sendFile(path.join(process.cwd(), 'public/html/index.html'));
});


http.listen(3000, function(){
   console.log('listening on port 3000');
});