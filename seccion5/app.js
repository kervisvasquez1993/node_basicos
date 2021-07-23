require('colors')
const {iniquirerMenu, pausa, leerInput} = require('./helpers/inquirer')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')
const main = async () => 
{
    console.clear()
    let opt = ''
    const tareas = new Tarea();
    do
    {
        opt = await iniquirerMenu();
        console.log({opt});
        switch (opt){
            case  '1': 
                const desc = await leerInput('Descripcion: ' )
                console.log(desc)   
            break;
            case '2' : 
                console.log(tareas._listado)
            break;
        }
            
    
        await pausa()   
    
    }
    while(opt !=='0')

    
}
main()