const { Router } = require("express");
const { check } = require("express-validator");
const {esAdminRole, validarRol, validarJWT, validarCampos} = require("../middlewares")
/* configuracion de rol */
const {
    esRolValido,
    existEmail,
    validateUserExit,
} = require("../helpers/dbValidator");

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
        check("email").custom(existEmail),
        check("name", "el nombre es requerido").not().isEmpty(),
        check("password", "el password es mas de 6 letras").isLength({
            min: 6,
        }),
        /* check("rol", "No es un rol permitido").isIn(['ADMIN_ROL', "USER_ROLE"]), */
        check("rol").custom(esRolValido),
        validarCampos,
    ],
    userPost
);
router.put(
    "/:idUser",
    [
        // check("idUser", "El id no es valido").isMongoId(),
        check("idUser").custom(validateUserExit),
        check("rol").custom(esRolValido),
        validarCampos,
    ],
    userPut
);
router.delete("/:idUser", [
    
    validarJWT,
    esAdminRole,
    validarRol("USER_ROLE", "ADMIN_ROLE", "VENTAS_ROLE"),
    check("idUser", "No es un Id valido").isMongoId(),
    check("idUser").custom(validateUserExit),
    validarCampos,
], userDelete);

module.exports = router;
