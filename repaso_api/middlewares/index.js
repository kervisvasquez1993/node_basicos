const  validarCampos  = require("../middlewares/validaCampo");
const  validarJWT  = require("../middlewares/validarJWT");
const  validaRoles = require("../middlewares/validar-admin");



module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validaRoles,
} 