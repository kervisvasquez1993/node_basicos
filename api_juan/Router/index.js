const express = require('express');
const router  = express.Router();
const clienteController = require('../Controller/clienteController')

module.exports = function(){
    // agregar nuevos clientes via post
    router.post('/clientes', clienteController.nuevoCliente);
    
    
    return router;
}