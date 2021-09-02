const Role  = require("../Models/Rol")
const esRolValido = async (rol = '') => {
    const existeRol  = await Role.findOne({ rol});
    if(!existeRol)
    {
        throw new Error(`El rol ${rol} no esta registrada en la base de datos`);
    }
}

module.exports = {
    esRolValido
}