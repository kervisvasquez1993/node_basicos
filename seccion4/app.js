// imprimir la tabla del 5 en consola 
const {crearArchivo} = require('./helpers/multiplicar')
const {argv}         = require('./config/yargs.js')

 let base   = argv.b,
    listar = argv.l



    salida = crearArchivo(base, listar).then
(
    archivo => console.log(archivo)
)
    