const express = require("express");
const cors = require("cors");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // PATH
        this.user = '/api/users'

        // MIDDLEWARES
        this.middleware();
        // RUTAS DE MI APLICACION
        this.routes();
    }

    middleware() {
        this.app.use(cors());
        // direcctorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use('/api/users', require('../Router/UserRouter'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo  por el puerto:", this.port);
        });
    }
}

module.exports = Server;
