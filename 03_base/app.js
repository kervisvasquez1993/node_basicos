const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');
let base = 4
let data = ''

for(i = 1 ; i <= 10 ; i ++)
{   
    let resultado = base*i
    data += `${base} * ${i} = ${resultado} \n`
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (e) => {
    if(e) throw e
    console.log('el srchivo a sido creado')
})