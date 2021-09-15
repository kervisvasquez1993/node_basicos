const { Router } = require("express");
const { check } = require("express-validator");
const {
    ProductIndex,
    ProductStore,
    ProductUpdate,
    ProductShow,
    ProductDelete,
} = require("../Controller/ProductController");

const router = Router();
// crear metodos en los controladores
/*
 * listar los productos
 */

router.get("/", ProductIndex);

router.get("/:id", ProductShow);

router.post("/", ProductStore);

router.put("/:id", ProductUpdate);

router.delete("/:id", ProductDelete);

module.exports = router;
