const socket = require('socket.io-client')('https://194c01b8.ngrok.io', {path: '/_ws'});
const uuid = require('node-uuid').v4();
const request = require('request');


socket.on('connect', function() {
    console.log('Connected!');
    socket.emit('register', {id: uuid, domain: "test"});
});

socket.on('request', function (data) {
    console.log(data);
    request(data.options, function (error, response, body) {
        console.log(response.headersObj);
        socket.emit('response', {
            id: data.id,
            status: response.statusCode,
            header: response.headers,
            body: body
        });
    });
});
