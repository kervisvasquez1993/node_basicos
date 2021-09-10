const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../Models/User");
const { generarJWT } = require("../helpers/jwt");
const {googleVerify} = require("../helpers/google-verify")
const login = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ data: "Usuario /password no son correcto - correo" });
        }
        /* verificar la contraseña */
        if (!user.status) {
            return res.status(400).json({
                data: "el usuario /Password no son correcto - estado : falso",
            });
        }
        /* si el usuario esta activo */

        // verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                data: "Usuario / Passowrd no son correctro- password",
            });
        }

        // generar el jwt
        const token = await generarJWT(user.id);
        return res.json({
            data: user,
            token,
        });
    } catch (error) {
        return res.status(500).json({
            data: error.message,
        });
    }
    res.json({ mensaje: "login ok" });
};

const googleSingIn = async (req, res = response) => {
    const { id_token } = req.body;
    const googleUser =  await googleVerify(id_token)
    const {email, name, picture, } = googleUser
    console.log(email,name,picture);
    try {
        
        res.json({ data: id_token });
    } catch (err) {
        res.status(400).json({
            data: "token no valido"
        })
    }
};

module.exports = {
    login,
    googleSingIn,
};
