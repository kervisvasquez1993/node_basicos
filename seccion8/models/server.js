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
            res .json({
                
                'msg' : "get API"
            })
          })
          this.app.put('/api', function (req, res)  {
            res .json({
                
                'msg' : "put API"
            })
          })
          this.app.post('/api', function (req, res)  {
            res .json({
                
                'msg' : "post API"
            })
          })
          this.app.delete('/api', function (req, res)  {
            res .json({
                
                'msg' : "delete API"
            })
          })
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(this.PORT);
        })
        
    }
}

module.exports = Server;