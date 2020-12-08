const {crearArchivo} = require('./multiplicar/multpiplicar');
// const fs = require('express');
// const fs = require('./fs');
let base = 7
/* console.log(process.argv) */

/* let argv = process.argv
let parametro = argv[2]
let 
 */

crearArchivo(base)
.then(archivo => console.log(`archivo creado ${archivo}`))
.catch(e => console.log(e))