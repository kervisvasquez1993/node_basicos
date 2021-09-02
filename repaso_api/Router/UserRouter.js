const { Router } = require("express");
const { check } = require("express-validator");

/* configuracion de rol */
const {esRolValido} = require("../helpers/dbValidator");
const {validarCampos} = require("../middlewares/validaCampo");
const {
    userGet,
    userPost,
    userPut,
    userDelete,
} = require("../Controller/UserController");
const router = Router();
router.get("/", userGet);
router.post(
    "/",
    [
        check("email", "el correo no es valido").isEmail(),
        check('name' , "el nombre es requerido").not().isEmpty(),
        check("password", "el password es mas de 6 letras").isLength({min:6}),
        /* check("rol", "No es un rol permitido").isIn(['ADMIN_ROL', "USER_ROLE"]), */
        check('rol').custom(esRolValido),
        validarCampos

    ],
    userPost
);
router.put("/:idUser", userPut);
router.delete("/", userDelete);

module.exports = router;
