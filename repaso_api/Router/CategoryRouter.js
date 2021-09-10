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
router.get('/:id', CategoryShow);
router.post('/', CategoryPost);
router.put('/:id', CategoryPut);
router.delete('/:id', CategoryDelete);

module.exports = router