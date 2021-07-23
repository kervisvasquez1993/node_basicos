const express = require('express')
const app = express()
const port = 8004

//servir contenido estatico 

app.use(express.static('public')) 
 
app.get('/',  (req, res) =>  {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/elements',  (req, res) =>  {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic',  (req, res) =>  {
  res.sendFile(__dirname + '/public/generic.html')
})

/* 
app.get('*',  (req, res) =>  {
  res.sendFile(__dirname +'/public/404.html');
}) */


/* app.get('/hola',  (req, res) =>  {
    res.send('hola mundo desde express')
  })
 */


  
app.listen(port, () => {
  console.log(`corriendo por el puerto http://localhost:${port}`)
})