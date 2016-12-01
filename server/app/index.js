const app = require('express')();
app.server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')(app.server, {serveClient: false, "path": "/_ws", "origins": "*:*"});
const uuid = require('node-uuid');


app.get('/', function (req, res) {
    res.status(200).send("test 11");
});

// const waitResponse = [];
// app.post('/', function (req, res) {
//     var requestId = uuid.v4();
//     io.emit('request', {
//         id: requestId,
//         options: {
//             method: 'GET',
//             uri: '----'
//         }
//     });
//     waitResponse.push(requestId, res);
// });

app.all('*', function (req, res) {
    req.id = uuid.v4();
    var data = {
        id: req.id,
        options: {
            method: req.method,
            url: req.url
        }
    };
    // io.emit('request', data);

    // waitResponse.push(requestId, res);
    console.log(req);
    console.log(data);
    res.send("test");
});

module.exports = app;


io.on('connection', function (socket) {
    socket.on('register', function (data) {
        console.log("Registered "+ data.id);
        socket.join(data.id);
    });

    socket.on('response', function (data) {
        console.log(data);
        //waitResponse.pop(data.id).set(data.header).status(data.status).send(data.body);
    });
});










