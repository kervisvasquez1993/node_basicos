require('colors');


const mostrarMenu = () =>
{

    return new Promise(resolve => 
        {
            console.log(`=======================`.green)
            console.log('Seleccione una ópcion'.red)
            console.log('=======================\n'.green)
            console.log(`${'1'.green}. Crear Una Tarea
                         ${'2'.green}. Listar Tareas
                         ${'3'.green}. Listar Tareas Completadas
                         ${'4'.green}. Listar Tareas Pendientes
                         ${'5'.green}. Completar tareas
                         ${'6'.green}. Borrar una Tarea
                         ${'0'.green}. Salir`)


            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            readline.question(`Seleccione una opción \n` ,  (opt)=> {
                readline.close();
                resolve(opt)
            })
        })


}


const pausa = () => 
{
    return new Promise(resolve => 
        {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question(`Presione ${'Enter'.green} para continuar \n` ,  (opt)=> {
            readline.close();
            resolve();
        })
    })
}


module.exports =  {
    mostrarMenu,
    pausa
}