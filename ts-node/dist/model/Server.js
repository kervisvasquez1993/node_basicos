"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("../routers/UserRouter"));
class Server {
    constructor() {
        this.apiPath = {
            users: 'api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        // definir mis rutas 
        this.routes;
    }
    routes() {
        this.app.use(this.apiPath.users, UserRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port');
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map