const express = require('express')
const cors = require('cors');


class Server {
    constructor(){
        this.app = express()
        this.PORT = process.env.PORT
        this.usersRoutePath = '/api/users'

        //Middlewares
        this.middleware();

        //rutas de mi aplicacion


        this.router();
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