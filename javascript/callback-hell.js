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

const salario = [
    {
        id: 1,
        salario: 2000,
    },
    {

        id: 2,
        salario: 1000,
    },
    
];


 const getEmpleado = (id) => {
    const empleado = empleados.find( (e) => e.id === id)
    if(empleado)
    {
        return empleado;
    }
    return `Empleado con id : ${id} no existe`;
}

console.log(getEmpleado(5))


 

getSalario