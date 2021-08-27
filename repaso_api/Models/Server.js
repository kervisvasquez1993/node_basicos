const express = require("express");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // MIDDLEWARES
        this.middleware();
        // RUTAS DE MI APLICACION
        this.routes();
    }

    middleware() {
        // direcctorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get("/", (req, res) => {
            res.send("Hello World");
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo  por el puerto:", this.port);
        });
    }
}

module.exports = Server;
