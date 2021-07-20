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

let id = 2;
getEmpleado = (id) => 
{
        return  new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre
        empleado ? 
                    resolve(empleado)
                 :  reject(`El usuario con id '${id}' no existe`)
        
    })
}



const getSalario = (id) => {
    return new Promise((resolve,reject) => {
        const salario = salarios.find( s => s.id === id)?.salario

        salario? resolve(salario) : reject(`Èl Salario del id '${id} no existe`)
    })
}


const getInfoUsuario = async(id) => 
{
    try {
        const empleado =  await getEmpleado(id);
        const salario   = await getSalario(id);
        return `el empleado ${empleado} tiene un sueldo de ${salario}`
    }
    catch(e) {
        throw e;
    }
   
}

getInfoUsuario(id)
        .then( msg => console.log(msg))
        .catch(e =>console.log(e))


        /* prueba con el async await */

        const carros = [
        {
            id : 1,
            nombre : 'carro1', 
            marca : 'corsa',
            year : '1990',
        },
        {
            id : 2,
            nombre : 'carro1', 
            marca : 'corsa',
            year : '1990',
        },
        {
            id : 3,
            nombre : 'carro1', 
            marca : 'corsa',
            year : '1990',
        },
        {
            id : 4,
            nombre : 'carro1', 
            marca : 'corsa',
            year : '1990',
        },
        {
            id : 5,
            nombre : 'carro1', 
            marca : 'corsa',
            year : '1990',
        }
    ]

        const precios= [
        {
            id : 1,
            precio : 2000,
        },
        {
            id : 2,
            precio : 3000,
        },
        {
            id : 3,
            precio : 2500,
        },
        {
            id : 4,
            precio : 200,
        },
        {
            id : 5,
            precio : 2000,
        }
    ]


    const ejemplo1 = (id) => 
    {
        return new Promise((resolve,reject) => {
            const card = carros.find(e => e.id === id)
            card ? 
                   resolve(card) 
                 : 
                   reject(`El id '${id} no esta asociado a ningun auto'`)
        })
    }
    
    const ejemplo2 = (id) => 
    {
       return new Promise((resolve,reject) => {
           precio = precios.find( p => p.id === id)?.precio
           precio? resolve(precio) : reject(`El id '${id}' no tiene un precio asociado`)
       })
    }



    const obtenerInfo = async (id) => {
        try {
            const test =  await ejemplo1(id);
            const hola = await ejemplo2(id)
            return `${test.nombre} cuesta ${hola}`
        } catch (error) 
        {
            throw error
        }
    }

    


    obtenerInfo(2)
    .then(respuesta => console.log(respuesta))
    .catch(e => console.log(e))