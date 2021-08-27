const express = require('express');
const router  = express.Router();
const clienteController = require('../Controller/clienteController')

module.exports = function(){
    // traer los clientes
    router.get('/clientes', clienteController.mostrarCliente)
    // agregar nuevos clientes via post
    router.post('/clientes', clienteController.nuevoCliente);
    // get show client
    router.get('/clientes/:idCliente', clienteController.showCliente);
    // update
    router.put('/clientes/:idCliente', clienteController.updateCliente);
    // eliminar registro
    router.delete('/clientes/:idCliente', clienteController.removeCliente);
    return router;
}