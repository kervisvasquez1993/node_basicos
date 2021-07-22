require('colors')
const {mostrarMenu, pausa} = require('./helpers/msj')
const main = async () => {
    console.log('hola mundo')
    let opt = ''
    do
    {
        opt = await mostrarMenu();
        console.log({opt});
        if(opt !== '0' ) 
        {
            await pausa()   
        }
    }
    while(opt !=='0')
    {

    }

    
}
main()