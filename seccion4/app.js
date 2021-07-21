// imprimir la tabla del 5 en consola 
const {crearArchivo} = require('./helpers/multiplicar')
console.clear();

let indice = 1,
    base   = 5
    console.log(
            `
                =================================
                       TABLA DEL ${base}
                =================================
            `  )




salida = crearArchivo(indice, base).then(
    archivo => console.log(archivo)
)
