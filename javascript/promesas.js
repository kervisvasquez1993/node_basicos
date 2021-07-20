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
        const empleado = empleados.find( e => e.id === id )
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