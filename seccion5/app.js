require('colors')
const {iniquirerMenu, pausa, leerInput} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
const main = async () => 
{
    console.clear()
    let opt = ''
    const tareas = new Tareas();
    do
    {
        /* imprimir el menu */
        opt = await iniquirerMenu();
        console.log({opt});
        switch (opt){
            case  '1': 
                const desc = await leerInput('Descripcion: ' )
                tareas.crearTarea(desc)
                
                
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