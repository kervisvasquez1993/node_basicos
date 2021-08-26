const Clientes = require('../Models/Clientes')
// agrega un nuevo cliente

exports.nuevoCliente = async (req, res,next) => {
    const cliente = new Clientes(req.body);

    try{
        // almacenar el registro
        await cliente.save();
        res.json({mensaje: 'Se agregao nuevo cliente' })
    }
    catch(error)
    {
        console.log(error);
        next();
    }
}