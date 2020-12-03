let empleados = [
    {id: 1 , nombre : 'kervis'},
    {id: 2 , nombre : 'coro'},
    {id: 3 , nombre : 'juan'},
    {id: 4 , nombre : 'karol'},
];
let salarios = [
    { id: 1, salario : 1000 },
    { id: 2, salario : 2000 },
]


let getEmpleado = async (id) => {
    
        let empleadoDB = empleados.find(empleado => empleado.id == id )
        if(!empleadoDB)
        {
            throw new Error(`no existe empleado con el ID ${id}`)
        }
        else 
        {
            return empleadoDB
        }

    
   
}

const getSalario = async (empledo) => 
{
    
        let  salarioDB = salarios.find(salario =>  salario.id == empledo.id)

        if(!salarioDB)
        {
            throw new Error(`no existe salario para ${empledo.nombre}`)
        }
        else
        {
            return {
                nombre  : empledo.nombre,
                salario : salarioDB.salario,
                id : empledo.id
            }
        }
    
}

getInformacio = async (id) => {
    let empleado = await getEmpleado(id)
    let respuesta  = await getSalario(empleado)
    return ` ${respuesta.nombre} tiene un salario de ${respuesta.salario}$`
}

getInformacio(5).then((mensaje) => {
    console.log(mensaje)
}).catch((err) => {
    console.log(err)
});