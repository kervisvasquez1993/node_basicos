// imprimir la tabla del 5 en consola 
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type : 'number',
                        demandOption: true,
                        default: 1
                    })
                    
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                    })
                    .check((argv, options) =>{
                        if(isNaN(argv.b))
                        { 
                            throw ('la base tiene que ser un Número')
                        }
                       
                        
                        return true
                    })
                    .argv


let base   = argv.b ,
    listar = argv.l

salida = crearArchivo(base, listar).then
(
    archivo => console.log(archivo)
)
   