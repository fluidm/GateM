const app = require('./../app');
const SOCKET_PORT = process.env.SOCKET_PORT || '5000';

app.server.listen(SOCKET_PORT);
