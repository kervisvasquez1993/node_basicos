const { Router } = require("express");
const { check } = require("express-validator");
const { login , googleSingIn} = require("../Controller/AuthController");
const { validarCampos } = require("../middlewares/validaCampo");
const {existEmail} = require("../helpers/dbValidator");


const router = Router();

router.post('/login', [
    check("email","el campo correo es obligatorio").isEmail(),
    check("password","La contraseña es obligatoria").not().isEmpty(),
    
    
    validarCampos,
],login )

router.post('/google', [
    check("id_token","El id Token es necesario").not().isEmpty(),
    validarCampos,
],googleSingIn )



module.exports = router;
