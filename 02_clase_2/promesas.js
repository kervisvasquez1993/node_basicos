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

let getEmpleado = (id) => {
    return new Promise( (resolve, reject ) => {

        let empleadoDB = empleados.find(empleado => empleado.id == id )
        if(!empleadoDB)
        {
            reject(`no existe empleado con el ID ${id}`)
        }
        else 
        {
            resolve(empleadoDB)
        }

    })
   
}

const getSalario = (empledo) => 
{
    return new Promise((resolve,reject) =>
    {
        let salarioDB = salarios.find(salario =>  salario.id == empledo.id)

        if(!salarioDB)
        {
            reject(`no existe salario para ${empledo.nombre}`)
        }
        else
        {
            resolve({
                nombre  : empledo.nombre,
                salario : salarioDB.salario,
                id : empledo.id
            })
        }
    })
}

getEmpleado(10).then(empleado => {
   //console.log('Empleado de base de datos', empleado)
  return getSalario(empleado)
})
.then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`)
})
.catch(e => { 
    console.log(e)
})