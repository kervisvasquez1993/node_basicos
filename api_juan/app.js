const express = require('express');
const router = require("./Router");
const port   = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
/* conectar mongo */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi', {
    useNewUrlParser : true,
});

//crear servidor
const app = express();

// habilitar el body-parse
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.use('/', router());

//puerto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
