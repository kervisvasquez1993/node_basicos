const { Router } = require("express");
const { check } = require("express-validator");
const { validarJWT, validarCampos } = require("../middlewares");
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

router.post(
    "/",
    [
        validarJWT,
        check("name", "El nombre del producto es requerido").not().isEmpty(),
        check("description", "La Descripción del producto es requerido").not().isEmpty(),
        validarCampos,
    ],
    ProductStore
);
/* 
*  agregar validacion para el id de la categoria que exista cuando se actualice 
*  actualizar campos name, description, available, category_id
*  Validar que exista el id del producto
*
*/
router.put("/:id", [
    validarJWT,
    check("id", "el Id no es valido").isMongoId(),
    check("name", "El nombre del producto es requerido").not().isEmpty(),
    check("description", "La Descripción del producto es requerido").not().isEmpty(),
    check("available", "campo available es requerido").not().isEmpty(),
    check("category","el campo category es requerido").not().isEmpty(),
    check("category", "el Id no es una categoria valida").isMongoId(),

    validarCampos,
], ProductUpdate);

router.delete("/:id", ProductDelete);

module.exports = router;
