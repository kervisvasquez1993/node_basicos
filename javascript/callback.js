const getUsuario = (id, callback) => 
{
    const usuario = {
        id,
        nombre : 'kervis',
    }
    setTimeout(() => {
        callback(usuario)
    },1500   )
}


    getUsuario(1, (usuario) => {
        console.log(usuario)
    })


    /* segundo ejemplo */

    const pelicula = {
        id: 1,
        nombre : 'pokemon',
        tipo: 'anime',
        horario : 'nocturno',
    }
    const getEjemplo = ({nombre, tipo, horario}, callback) =>
 {
        setTimeout(() => {
            callback(`el anime se llama '${nombre}' y es un '${tipo}', y su horario es '${horario}'`)
        },1000)         
    }


    getEjemplo(pelicula, (pelicula) => {

        console.log(pelicula)
    })