const inquirer = require('inquirer');
require('colors')
const preguntas = 
[
 {
    type : 'list',
    name : 'opcion',
    message : '¿Que Deseas Hacer?',
    choices :
    [
        {
        value : '1',
        name  : '1. Crear Tarea'
        },
        {
            value : '2',
            name  : '2. Listar Tareas'
        },
        {
            value : '3',
            name  : '3. Listar Tareas Completadas'
        },
        {
            value : '4',
            name  : '4. Listar Tareas Pendientes'
        },
        {
            value : '5',
            name  : '5. Completar tarea(s) '
        },
        {
            value : '6',
            name  : '6. Borrar Tarea'
        },
        {
            value : '0',
            name  : '0. Salir'
        },
    ]
  },

];


const iniquirerMenu = async() => {
    console.log('================================')
    console.log(' Seleccione una opcion'.green)
    console.log('================================')

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion
}


const pausa = async () => 
{
    const questions = [
        {
            type : 'input',
            name  : 'enter',
            message  : `Presione enter para continuar \n` ,
        }
    ]
    await inquirer.prompt(questions);
}

module.exports = {
    iniquirerMenu,
    pausa
}