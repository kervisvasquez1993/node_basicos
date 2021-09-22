import express, {Application} from "express";
import userRoutes from "../routers/UserRouter"
class Server {
    private app: Application;
    private port : string;
    private apiPath = {
        users : 'api/users'
    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        // definir mis rutas
        this.routes
    }

    routes(){
        this.app.use(this.apiPath.users, userRoutes);
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('listening on port')
        });
    }
}


export default  Server;