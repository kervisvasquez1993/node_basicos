const express = require("express");
const router = express.Router();
const clienteController = require("../Controller/clienteController");
const productoController = require("../Controller/productoController");

module.exports = function () {
    // traer los clientes
    router.get("/clientes", clienteController.mostrarCliente);
    // agregar nuevos clientes via post
    router.post("/clientes", clienteController.nuevoCliente);
    // get show client
    router.get("/clientes/:idCliente", clienteController.showCliente);
    // update
    router.put("/clientes/:idCliente", clienteController.updateCliente);
    // eliminar registro
    router.delete("/clientes/:idCliente", clienteController.removeCliente);

    // productos

    router.post(
        "/productos",
        productoController.subirArchivo,
        productoController.nuevoProducto
    );
    // mostart productos
    router.get("/productos", productoController.indexProducto);
    // tarer un producto en especifico
    router.get("/productos/:idProducto", productoController.showProducto);
    // update productos

    router.put(
        "/productos/:idProducto",
        productoController.subirArchivo,
        productoController.updateProducto
    );

    return router;
};
