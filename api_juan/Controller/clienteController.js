const Clientes = require("../Models/Clientes");
// agrega un nuevo cliente

exports.nuevoCliente = async (req, res, next) => {
    for (let i = 0; i <= 50; i++) {
        let data = { ...req.body, email: req.body.email + i };

        const cliente = new Clientes(data);

        try {
            // almacenar el registro
            await cliente.save();
            
        } catch (error) {
            res.json(error);
            next();
        }
    }

    res.json({ mensaje: "Se agregao nuevo cliente" });
};

exports.mostrarCliente = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});

        res.json({ data: clientes });
    } catch (error) {
        res.json({ data: error });
    }
};

exports.showClientes = async (req, res, next) =>{
    
    const cliente = await Clientes.findById(req.params.idCliente);
    if(!cliente)
    {
        res.json({data : 'Ese cliente no existe'});
        next();
    }
    // mostarr el cliente
    res.json(cliente);
}
