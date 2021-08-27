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
        this.app.get("/api/users", (req, res) => {
            res.json( {data : "Hello World"});
        });

        this.app.get("/api/users/:idUser", (req, res) => {
            res.json( {data : "Hello World"});
        });
        this.app.post("/api/user", (req, res,next) => {
            res.json( {data : "Hello World"});
        });
        this.app.put("/api/user/:idUser", (req, res) => {
            res.json( {data : "Hello World"});
        });
        this.app.delete("/api", (req, res) => {
            res.json( {data : "Hello World"});
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo  por el puerto:", this.port);
        });
    }
}

module.exports = Server;
