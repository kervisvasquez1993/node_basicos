// imprimir la tabla del 5 en consola 
const {crearArchivo} = require('./helpers/multiplicar')
console.clear();

let indice = 1
    /* base   = 5 */
const [,, arg3 = 'base=1'] = process.argv;
const [, base = 1] = arg3.split('=')
    console.log(
            `
                =================================
                       TABLA DEL ${base}
                =================================
            `  )

/* console.log(process.argv); */

/* console.log(base1); */


 salida = crearArchivo(indice, base).then(
    archivo => console.log(archivo)
)
 