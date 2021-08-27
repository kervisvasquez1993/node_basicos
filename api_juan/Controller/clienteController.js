const Clientes = require("../Models/Clientes");
// agrega un nuevo cliente

exports.nuevoCliente = async (req, res, next) => {
    /* for (let i = 0; i <= 50; i++) {
        let data = { ...req.body, email: req.body.email + i };

        const cliente = new Clientes(data);

        try {
            // almacenar el registro
            await cliente.save();
            
        } catch (error) {
            res.json(error);
            next();
        }
    } */
    const cliente = new Clientes(req.body);

        try {
            // almacenar el registro
            await cliente.save();
            
        } catch (error) {
            res.json(error);
            next();
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

exports.showCliente = async (req, res, next) =>{
    
    const cliente = await Clientes.findById(req.params.idCliente);
    if(!cliente)
    {
        return res.json({data : 'Ese cliente no existe'});
        
    }
    // mostarr el cliente
    res.json(cliente);
}

exports.updateCliente = async (req, res, next) => 
{
    try{
        const cliente = await Clientes.findByIdAndUpdate({ 
            _id : req.params.idCliente},
            req.body, {
                new : true
            });

            // mostrar cliente
           return  res.json(cliente);
    }
    catch(error)
    {
      console.log(error);
      next();
    }
}
// elimina el cliente por su id
exports.removeCliente = async (req, res, next) => 
{
        try
        {
            await Clientes.findOneAndRemove({_id : req.params.idCliente});
            return res.json({
                data : 'Cliente eliminado'
            });
        }
        catch (error)
        {
            console.log(error);
            next();
        }
}
