require('colors')
const {iniquirerMenu, pausa} = require('./helpers/inquirer')
const main = async () => {
    console.clear()
    let opt = ''
    do
    {
        opt = await iniquirerMenu();
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