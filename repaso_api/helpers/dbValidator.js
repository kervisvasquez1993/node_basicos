const Role = require("../Models/Rol");
const User = require("../Models/User");
const esRolValido = async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol "${rol}" no esta registrada en la base de datos`);
    }
};

const existEmail = async (email = '') => {
    const emailValidate = await User.findOne({email});
    if(emailValidate)
    {
        throw new Error(`El email "${email}" ya esta registrado en la base de datos`);
    }
};

module.exports = {
    esRolValido,
    existEmail,
};
