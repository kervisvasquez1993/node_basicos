const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../Controller/AuthController");
const { validarCampos } = require("../middlewares/validaCampo");
const {existEmail} = require("../helpers/dbValidator");


const router = Router();

router.post('/login', [
    check("email","el campo correo es obligatorio").isEmail(),
    check("password","La contraseña es obligatoria").not().isEmpty(),
    
    
    validarCampos,
],login )


module.exports = router;
