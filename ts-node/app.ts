import dotenv from "dotenv";
import Server from "./model/Server";
// configurar dotenv
dotenv.config();
const server = new Server();

server.listen()