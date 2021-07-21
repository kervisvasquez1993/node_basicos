const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base, listar, incidencia) => 
{
    try
     {
        let salida = '',
        inicio = 1
        if(listar)
        {
            while(inicio <= incidencia)
            {
                
                salida += multiplicarPorCinco(inicio,base);
                console.log(multiplicarPorCinco(inicio,base));
                inicio ++
            }
            
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida) 
       
         return `Fue creado la tabla del ${base}`;  
        
    } catch (error) 
    {
        throw error;
    }

   
}


const multiplicarPorCinco = (inicio, base = 1) => 
{
    return `${inicio} ${'X'.green} ${base} = ${inicio * base} \n` 
    
}

module.exports = {
    crearArchivo
}