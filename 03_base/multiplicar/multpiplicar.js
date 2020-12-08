const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
let data = ''

const crearArchivo = base => {
   return new Promise((resolve,rejects) => {
    for(i = 1 ; i <= 10 ; i ++)
    {   
        let resultado = base*i
        data += `${base} * ${i} = ${resultado} \n`
    }
    
    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (e) => {
        if(e)
        {
            rejects(e)
        }
        else
        {
            resolve(`tabla-${base}`)
        }
    })


   })
    
}

module.exports = {
    crearArchivo
}