require('colors')
const {iniquirerMenu, pausa} = require('./helpers/inquirer')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')
const main = async () => {
    console.clear()
    let opt = ''
    do
    {
       /*  opt = await iniquirerMenu();
        console.log({opt});
       if(opt !== '0' ) 
        {
            await pausa()   
        }  */
        const tarea = new Tarea('hacer ejercicio')
        const tareas = new Tareas()
        
        tareas._listado[tarea.id] = tarea;
        console.log(tareas)
        await pausa()

    }
    while(opt !=='0')
    {

    }

    
}
main()