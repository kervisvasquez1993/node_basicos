const express = require('express')
const hbs = require('hbs');
/* const hbs = require('handlebars') */
const app = express()
const port = 8004




//servir contenido estatico 


hbs.registerPartials(__dirname + '/views/partials', function (err) {
  return err;
});


app.use(express.static('public')) 
 
/* app.get('/',  (req, res) =>  {
  res.sendFile(__dirname + '/public/index.html')
})
 */
app.get('/',  (req, res) =>  {

  res.render("home", {
    nombre: "fernando herrera",
    titulo: "curso de node"
  })
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