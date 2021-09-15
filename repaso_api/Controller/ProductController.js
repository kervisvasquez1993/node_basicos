const { response, request } = require("express");
const { Product } = require("../Models");
const bcryptjs = require("bcryptjs");
/* index from category */

/* 
* Listar productos con status en true
*/

const ProductIndex = (req = request , res = response, next) => {
    res.json({data : "hola desde index"});
}

const ProductStore = (req = request , res = response, next) => {
    res.json({data : "hola desde Store"});
}

const ProductUpdate = (req = request , res = response, next) => {
    res.json({data : "hola desde Update"});
}

const ProductShow = (req = request , res = response, next) => {
    res.json({data : "hola desde Show"});
}

const ProductDelete = (req = request , res = response, next) => {
    res.json({data : "hola desde Delete"});
}


module.exports = {
    ProductIndex,
    ProductStore,
    ProductUpdate,
    ProductShow,
    ProductDelete,
};
