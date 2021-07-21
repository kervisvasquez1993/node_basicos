// imprimir la tabla del 5 en consola 
const {crearArchivo} = require('./helpers/multiplicar')
const {argv}         = require('./config/yargs.js')
const colors         = require('colors')

 let base   = argv.b,
    listar = argv.l,
    indices = argv.t



    salida = crearArchivo(base, listar, indices).then
(
    archivo => console.log(archivo.rainbow)
)
    