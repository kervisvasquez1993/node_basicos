"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("../routers/UserRouter"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("../config/db"));
class Server {
    constructor() {
        this.apiPath = {
            users: "/api/users",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.SERVER_PORT || "8005";
        this.dbConnection();
        this.middleware();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.authenticate();
                console.log("Database esta online");
            }
            catch (err) {
                throw new Error("No se conecto a la base de datos");
            }
        });
    }
    middleware() {
        // CORS
        this.app.use((0, cors_1.default)());
        //  LECTURA DEL BODY
        this.app.use(express_1.default.json());
        //  CARPETA PUBLICA
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPath.users, UserRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo  por el puerto:", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map