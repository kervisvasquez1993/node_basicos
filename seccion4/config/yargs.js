const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type : 'number',
                        demandOption: true,
                        default: 1,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('t', {
                        alias: 'tamano',
                        type : 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'Ingresa los indices para mostrar'
                    })
                    
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la Tabla en consola'
                    })
                    .check((argv, options) =>{
                        if(isNaN(argv.b))
                        { 
                            throw ('la base tiene que ser un Número')
                        }
                       
                        
                        return true
                    })
                    .argv

module.exports = {argv};

