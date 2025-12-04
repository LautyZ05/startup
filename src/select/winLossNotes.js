const winStatus = {
    System: "system",
    Win: "playerWin",
    Loss: "playerLoss",
};

class formMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class sendRecieveMessage {
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.receiveMessage(new formMessage("Startup", winStatus.System, { msg: "connected" }));
        };
        this.socket.onclose = (event) => {
            this.receiveMessage(new formMessage("Startup", winStatus.System, { msg: "disconnected" }));
        };
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveMessage(event);
            } catch {}
        };
    }

    sendMessage(from, type, value) {
        const event = new formMessage(from, type, value);
        this.socket.send(JSON.stringify(event));
    }

    receiveMessage(event) {
        this.events.push(event);
        this.events.forEach((e) => {
            this.handlers.forEach((handler) => {
                handler(e);
            });
        });
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

}

const messages = new sendRecieveMessage();
export { winStatus, messages };