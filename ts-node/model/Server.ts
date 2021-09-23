import express, { Application } from "express";
import userRoute from "../routers/UserRouter";
import cors from "cors";
import db from "../config/db";
class Server {
    private app: Application;
    private port: string;
    private apiPath = {
        users: "/api/users",
    };
    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT || "8005";
        this.dbConnection();
        this.middleware();
        this.routes();
    }

    async dbConnection() {
        try {

            await db.authenticate();
            console.log("Database esta online")
        } catch (err) {
            throw new Error("No se conecto a la base de datos");
        }
    }

    middleware() {
        // CORS

        this.app.use(cors());

        //  LECTURA DEL BODY

        this.app.use(express.json());

        //  CARPETA PUBLICA

        this.app.use(express.static("public"));
    }
    routes() {
        this.app.use(this.apiPath.users, userRoute);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo  por el puerto:", this.port);
        });
    }
}

export default Server;
