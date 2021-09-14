const { Router } = require("express");
const { check } = require("express-validator");
const {  validarJWT,validarCampos } = require("../middlewares");
const router = Router();
// crear metodos en los controladores
const {
    CategoryIndex,
    CategoryPost,
    CategoryPut,
    CategoryShow,
    CategoryDelete,
} = require("../Controller/CategoryController");


/*  {{url}}/api/category*/
router.get('/', CategoryIndex);
router.get('/:id', CategoryShow);
// crear categoria - provado - cualquier persona con untoken valido
router.post('/', [
    validarJWT,
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    validarCampos
], CategoryPost);
// actualizar categoria - privado - cualquier persona con un token valido
router.put('/:id', CategoryPut);
// borrar categoria - privado - solo los admin pueden hacer esta accion
router.delete('/:id', CategoryDelete);

module.exports = router