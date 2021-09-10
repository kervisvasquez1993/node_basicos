const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validaCampo");
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
router.post('/', CategoryPost);
router.put('/:id', CategoryPut);
router.get('/:id', CategoryShow);
router.delete('/:id', CategoryDelete);

module.exports = router