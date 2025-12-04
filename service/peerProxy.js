const { WebSocketServer } = require('ws');

function peerProxy(listening) {
    const theServer = new WebSocketServer({ server: listening})

    theServer.on("connection", (socket) => {
        socket.isAlive = true;

        socket.on("message", function message(data) {
            theServer.clients.forEach((client) => {
                if (client !== socket && client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });

        socket.on("pong", () => {
            socket.isAlive = true;
        });
    });

    setInterval(() => {
        theServer.clients.forEach(function each(client) {
            if (client.isAlive === false) return client.terminate();

            client.isAlive = false;
            client.ping();
        });
    }, 10000);
}


module.exports = {peerProxy}
