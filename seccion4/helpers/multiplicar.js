const fs = require("fs");
const crearArchivo = async (base, listar) => 
{
    try
     {
        let salida = '',
        indice = 0
        if(listar)
        {
            while(indice <= 10)
            {
                
                salida += multiplicarPorCinco(indice,base);
                console.log(multiplicarPorCinco(indice,base));
                indice ++
            }
            
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida) 
       
         return `Fue creado la tabla del ${base}`;  
        
    } catch (error) 
    {
        throw error;
    }

   
}


const multiplicarPorCinco = (indice, base = 1) => 
{
    return `${indice} X ${base} = ${indice * base} \n` 
    
}

module.exports = {
    crearArchivo
}