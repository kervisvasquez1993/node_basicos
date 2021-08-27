const Server = require('./Models/Server');

require('dotenv').config();
/* configuracion del servidor */

const server = new Server();
server.listen();
 
