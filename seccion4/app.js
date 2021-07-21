// imprimir la tabla del 5 en consola 
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type : 'number',
                        demandOption: true,
                    })
                    .check((argv, options) =>{
                        if(isNaN(argv.b))
                        { 
                            throw 'la base tiene que ser un Número'
                        }
                    })
                    .argv
console.clear();

let indice = 1
     base   = 5 
/*   */
  /*   console.log(
            `
                =================================
                       TABLA DEL ${base}
                =================================
            `  ) */

/* console.log(process.argv); */

 console.log('base: yargs', argv);

 

/*  salida = crearArchivo(indice, base).then(
    archivo => console.log(archivo)
)
  */