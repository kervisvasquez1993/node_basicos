import express, { Application } from "express";
import userRoute from "../routers/UserRouter";
class Server {
    private app: Application;
    private port: string;
    private apiPath = {
        users: "/api/users",
    };
    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT || "8005" ;
        // definir mis rutas
         this.routes();
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
