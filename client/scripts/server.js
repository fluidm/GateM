
var socket = require('socket.io-client')('http://1988b1f7.ngrok.io', {path: '/_ws'});
socket.on('connect', function(conn) {
    socket.emit('my other event', {test: "test"});

});

// socket.on('news', function(data){
//     console.log(data);
// });
// socket.on('disconnect', function(){
//     console.log('disconnected!');
// });