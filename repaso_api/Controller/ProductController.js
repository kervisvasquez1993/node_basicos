const { response, request } = require("express");
const { Product } = require("../Models");
const bcryptjs = require("bcryptjs");
/* index from category */

module.exports = {
    ProductIndex,
    ProductStore,
    ProductPut,
    ProductShow,
    ProductDelete,
};
