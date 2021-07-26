const express = require('express')


class Server {
    constructor(){
        this.app = express()
        this.PORT = process.env.PORT

        //Middlewares
        this.middleware();

        //rutas de mi aplicacion


        this.router();
    }


    middleware()
    {
        this.app.use(express.static('public'))
    }

    router(){
        this.app.get('/api', function (req, res)  {
            res.send('Hello World')
          })
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(this.PORT);
        })
        
    }
}

module.exports = Server;