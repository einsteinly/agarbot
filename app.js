var express = require('express');
var app = express();
//Socket.io implementation
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var agarioBots = require('./agario.js');
var initiated = 0;
var x,y,serverLocation, botName, token = 0;

app.get('/setCoordinate/:x/:y', function(req, res) {
    x = req.params.x;
    y = req.params.y;
    agarioBots.setCoordinate(x, y);
    if(initiated) agarioBots.clientUpdate();
    console.log(x,y);
});

app.get('/setServer/:serverLocation/:token/:botName', function(req, res) {
    serverLocation = decodeURIComponent(req.params.serverLocation);
    botName = decodeURIComponent(req.params.botName);
    token = decodeURIComponent(req.params.token);
    agarioBots.init(serverLocation, token, botName);
    initiated = 1;
    console.log(serverLocation,token);
});


io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log('client connected');
        agarioBots.init(data.serverLocation, data.token, 'workingBots');
    });

    client.on('coordinates', function(data){
        var x = data.x;
        var y = data.y;
        agarioBots.setCoordinate(x, y);
        if(initiated) agarioBots.clientUpdate();
    })
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 80!');
});

server.listen(8081);  