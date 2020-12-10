const argv = require('yargs').command(
    'listar','Imprime en consola la table de multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite :{
            alias: 'l',
            default : 10
        }
    })
    .help()
    .argv
const {crearArchivo} = require('./multiplicar/multpiplicar');
// const fs = require('express');
// const fs = require('./fs');
//let base = 7
/* console.log(process.argv) */

/* let argv2 = process.argv */

/*  
console.log('limite', argv.limite)
//let parametro = argv[2] */
//let base = parametro.split("=")[1]

/* 
crearArchivo(base)
.then(archivo => console.log(`archivo creado ${archivo}`))
.catch(e => console.log(e))  */

console.log(argv)