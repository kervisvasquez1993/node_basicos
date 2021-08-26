const express = require('express');
const router = require("./router");
const port   = 3000;

//crear servidor
const app = express();

app.use('/', router());
app.use('/nosotros', router());
//puerto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
