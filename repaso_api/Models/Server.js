const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload')

const { dbConnection } = require("../Database/config");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // PATH
        this.paths = {
            userPath: "/api/users",
            authPath: "/api/auth",
            categoryPath: "/api/category",
            productPath: "/api/product",
            uploadPath: "/api/upload",
            searchPath: "/api/search",
        };

        // conectar a la base de datos
        this.conectarDB();

        // MIDDLEWARES
        this.middleware();
        // RUTAS DE MI APLICACION
        this.routes();
    }
    async conectarDB() {
        await dbConnection();
    }

    middleware() {
        this.app.use(cors());

        // parseo de informacion

        this.app.use(express.json());

        // direcctorio publico
        this.app.use(express.static("public"));

        // Note that this option available for versions 1.0.0 and newer.
        // cargar archivos
        this.app.use(
            fileUpload({
                useTempFiles: true,
                tempFileDir: "/tmp/",
                createParentPath : true
            })
        );
    }

    routes() {
        this.app.use(this.paths.authPath, require("../Router/AuthRouter"));
        this.app.use(
            this.paths.categoryPath,
            require("../Router/CategoryRouter")
        );
        this.app.use(this.paths.userPath, require("../Router/UserRouter"));
        this.app.use(
            this.paths.productPath,
            require("../Router/ProductRouter")
        );
        this.app.use(this.paths.uploadPath, require("../Router/UploadRouter")); 
        this.app.use(this.paths.searchPath, require("../Router/SearchRouter"));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo  por el puerto:", this.port);
        });
    }
}

module.exports = Server;
