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
