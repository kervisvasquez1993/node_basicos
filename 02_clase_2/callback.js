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

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if(!salarioDB)
    {
        callback(`no existe salario para el señor ${empleado.nombre}`)
    }
    else
    {
        callback(null, salarioDB({
            nombre  : empleado.nombre,
            salario : salarioDB.salario,
            id      : empleado.id
        }))
    }
    
}


console.log(getSalario(3))



let getEmpleado = (id, callback ) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if(!empleadoDB)
    {
        callback(`no existe un emplado con el ${id}`)
    }
    else{
        callback(null, empleadoDB)
    }
}




getEmpleado(2, (err, empleado) => {
    if(err){
        return console.log(err)
    }
    getSalario(empleado, (err, resp) =>  {
        if(err)
        {
            return console.log(err)
        }

        console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`)
    })
})

//console.log(getSalario(2))