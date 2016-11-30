const app = require('express')();
app.server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')(app.server, {serveClient: false, "path": "/_ws", "origins": "*:*"});

app.use(bodyParser.json({
        type: () => true
}));

app.use(cors());


app.get('/', function (req, res) {
    res.status(201).send();
});

module.exports = app;


io.on('connection', function (socket) {
    console.log('new connection.');

    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});










