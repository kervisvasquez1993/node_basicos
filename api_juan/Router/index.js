const express = require('express');
const router  = express.Router();
const clienteController = require('../Controller/clienteController')

module.exports = function(){
    // traer los clientes

    router.get('/clientes', clienteController.mostrarCliente)
    // agregar nuevos clientes via post
    router.post('/clientes', clienteController.nuevoCliente);
    
    
    return router;
}