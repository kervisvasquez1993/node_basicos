const empleados = [
    {
        id: 1,
        nombre: 'Juan',
    },
    {

        id: 2,
        nombre: 'Pedro',
    },
    {
        id: 3,
        nombre: 'Ramiro',
    }
];

const salarios = [
    {
        id: 1,
        salario: 2000,
    },
    {

        id: 2,
        salario: 1000,
    },
    
];

getEmpleado = (id) => {
    return  new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre
        empleado ? 
                    resolve(empleado)
                 :  reject(`El usuario con id '${id}' no existe`)
        
    })
}


/* ejecutando la promesa */
 const id = 3;
 getEmpleado(id)
 .then(empleado => console.log(empleado))
 .catch(e => console.log(e))




 /* segundo ejemplo */


 const getSalario = (id) => {
     return new Promise((resolve,reject) => {
         const salario = salarios.find( s => s.id === id)?.salario

         salario? resolve(salario) : reject(`Èl Salario del id '${id} no existe`)
     })
 }

 getSalario(id)
              .then(
                  salario => console.log(salario)
              )
              .catch(e => console.log(e))

              /* promesas con callback */



/* getEmpleado(id)
                .then(
                    testEmpleado => getSalario(id)
                                            .then(
                                                salario =>{ console.log(`el empleado ${testEmpleado} tiene un salario de ${salario}`)}
                                            ).catch(e => {console.log(`el empleado ${empleado} no posee un salario asignado`)})
                                           
                ).catch(e =>console.log(`el id '${id}' no esta asociado a ningun empleado`)) */


                /* promesas en cadenas */
let nombre;
getEmpleado(id)
            .then( empleado =>
                { 
                   nombre = empleado
                   return  getSalario(id)
                })
                .then(
                    salario => console.log(`empleado ${nombre}, salario ${salario}`)
                ).catch(e => console.log(`el empleado ${nombre} no poseee salario`))
                .catch(e => console.log(e))


