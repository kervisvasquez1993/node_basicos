const express = require('express')
const cors = require('cors');
const {dbConnection} = require('../DB/config.db.js')


class Server {
    constructor(){
        this.app = express()
        this.PORT = process.env.PORT
        this.usersRoutePath = '/api/users'
        this.database();
        //Middlewares
        this.middleware();
        //rutas de mi aplicacion
        this.router();
    }
    //conectar a base de datos
    async database()
    {
        await dbConnection();
    }
    middleware()
    {
        this.app.use(cors())

        //parseo y lectura de body
        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    router()
    {
        this.app.use(this.usersRoutePath, require('../routes/user.router'))
    }

    listen()
    {
        this.app.listen(this.PORT, () => {
            console.log(this.PORT);
        })
        
    }
}

module.exports = Server;