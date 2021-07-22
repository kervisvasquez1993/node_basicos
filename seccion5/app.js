require('colors')
const {i} = require('./helpers/inquirer')
const main = async () => {
    console.log('hola mundo')
    let opt = ''
    do
    {
        opt = await i();
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