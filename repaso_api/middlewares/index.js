const  validarCampos  = require("../middlewares/validaCampo");
const  validarJWT  = require("../middlewares/validarJWT");
const  validaRoles = require("../middlewares/validar-admin");
const validateFile = require("../middlewares/validate-archivo")


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validaRoles,
    ...validateFile
} 