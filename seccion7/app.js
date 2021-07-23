const express = require('express')
const app = express()
const port = 8003

//servir contenido estatico 

app.use(express.static('public')) 
 
app.get('/',  (req, res) =>  {
  res.send('Hello World')
})

app.get('/hola',  (req, res) =>  {
    res.send('hola mundo desde express')
  })

  app.get('*',  (req, res) =>  {
    res.sendFile(__dirname +'/public/404.html');
  })
 
app.listen(port, () => {
  console.log(`corriendo por el puerto http://localhost:${port}`)
})