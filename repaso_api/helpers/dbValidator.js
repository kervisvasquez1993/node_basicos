const Role = require("../Models/Role");
const User = require("../Models/User");
const Category = require("../Models/Category");
const esRolValido = async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(
            `El rol "${rol}" no esta registrada en la base de datos`
        );
    }
};

const existEmail = async (email = "") => {
    const emailValidate = await User.findOne({ email });
    if (emailValidate) {
        throw new Error(
            `El email "${email}" ya esta registrado en la base de datos`
        );
    }
};

const validateUserExit = async (idUser) => {
    const userExist = await User.findById(idUser);
    console.log(userExist);
    if (!userExist) {
        throw new Error(`El ID ${id} no esta asociado a ningun usuario`);
    }
};

/* validat id de la category */

const validarCategoryExist = async (id) => {
    const category = await Category.findById(id);
    if (!category) {
        throw new Error(`El ID ${id} no esta asociado a ninguna categoria`);
    }
    return;
};

module.exports = {
    esRolValido,
    existEmail,
    validateUserExit,
    validarCategoryExist,
};
