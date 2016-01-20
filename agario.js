var exports = module.exports={};

var AgarioClient = require('agario-client');

var xCoordinate, yCoordinate;

exports.setCoordinate = function(x,y){
    xCoordinate = x;
    yCoordinate = y;
}

exports.init = function (agarHost,token, botName)
{
    client = new AgarioClient('client1'); 
    client.connect(agarHost,token);
    client.on('connected', function() { //when we connected to server
        client.log('spawning');
        client.spawn(botName); //spawning new ball
        client.moveTo(xCoordinate, yCoordinate);
    });
    client.on('connectionError', function(e) {
        client.log('Connection failed with reason: ' + e);
        client.log('Server address set to: ' + client.server + ' please check if this is correct and working address');
    });
    client.on('lostMyBalls', function() { //when i lost all my balls
        client.log('lost all my balls, respawning');
        client.spawn('agario-client'); //spawning new ball with nickname "agario-client"
    });
    
    client2 = new AgarioClient('client2'); 
    client2.connect(agarHost,token);
    client2.on('connected', function() { //when we connected to server
        // client2.log('spawning');
        client2.spawn(botName); //spawning new ball
        client2.moveTo(xCoordinate, yCoordinate);
    });
    client2.on('connectionError', function(e) {
        client2.log('Connection failed with reason: ' + e);
        client2.log('Server address set to: ' + client2.server + ' please check if this is correct and working address');
    });
    client2.on('lostMyBalls', function() { //when i lost all my balls
        // client2.log('lost all my balls, respawning');
        client2.spawn('agario-client'); //spawning new ball with nickname "agario-client"
    });
    
    client3 = new AgarioClient('client3'); 
    client3.connect(agarHost,token);
    client3.on('connected', function() { //when we connected to server
        // client3.log('spawning');
        client3.spawn(botName); //spawning new ball
        client3.moveTo(xCoordinate, yCoordinate);
    });
    client3.on('connectionError', function(e) {
        client3.log('Connection failed with reason: ' + e);
        client3.log('Server address set to: ' + client3.server + ' please check if this is correct and working address');
    });
    client3.on('lostMyBalls', function() { //when i lost all my balls
        // client3.log('lost all my balls, respawning');
        client3.spawn('agario-client'); //spawning new ball with nickname "agario-client"
    });
    
    client4 = new AgarioClient('client4'); 
    client4.connect(agarHost,token);
    client4.on('connected', function() { //when we connected to server
        // client4.log('spawning');
        client4.spawn(botName); //spawning new ball
        client4.moveTo(xCoordinate, yCoordinate);
    });
    client4.on('connectionError', function(e) {
        client4.log('Connection failed with reason: ' + e);
        client4.log('Server address set to: ' + client4.server + ' please check if this is correct and working address');
    });
    client4.on('lostMyBalls', function() { //when i lost all my balls
        // client4.log('lost all my balls, respawning');
        client4.spawn('agario-client'); //spawning new ball with nickname "agario-client"
    });
    
    client5 = new AgarioClient('client5'); 
    client5.connect(agarHost,token);
    client5.on('connected', function() { //when we connected to server
        // client5.log('spawning');
        client5.spawn(botName); //spawning new ball
        client5.moveTo(xCoordinate, yCoordinate);
    });
    client5.on('connectionError', function(e) {
        client5.log('Connection failed with reason: ' + e);
        client5.log('Server address set to: ' + client5.server + ' please check if this is correct and working address');
    });
    client5.on('lostMyBalls', function() { //when i lost all my balls
        // client5.log('lost all my balls, respawning');
        client5.spawn('agario-client'); //spawning new ball with nickname "agario-client"
    });
    
}

exports.clientUpdate= function() {
        client.moveTo(xCoordinate, yCoordinate);
        client2.moveTo(xCoordinate, yCoordinate);
        client3.moveTo(xCoordinate, yCoordinate);
        client4.moveTo(xCoordinate, yCoordinate);
        client5.moveTo(xCoordinate, yCoordinate);
    }