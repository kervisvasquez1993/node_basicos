const express = require('express');
const router = require("./router");
const port   = 3000;
const mongoose = require('mongoose');
/* conectar mongo */
mongoose.Promise = global.Promise;
mongoose.conectar = ('mongod://localhost:27017/restapi', {
    userNewUrlParser : true,
});

//crear servidor
const app = express();

app.use('/', router());
app.use('/nosotros', router());
//puerto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
