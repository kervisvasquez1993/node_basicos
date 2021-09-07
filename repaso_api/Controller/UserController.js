const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../Models/User");

const userGet = async (req = request, res = response) => {
    /* se puede desectructurar */
    const { limit = 5, desde = 0 } = req.query;
    const query = { status: true };
    const users = User.find(query).skip(Number(desde)).limit(Number(limit));
    const total = User.countDocuments(query);

    const [t, u] = await Promise.all([total, users]);
    res.json({  t, u });
};

const userPost = async (req = request, res = response, next) => {
    const { name, email, password, rol } = req.body;
    try {
        const usuario = new User({ name, email, password, rol });

        // verificar que el correo existe
        const correoExist = await User.findOne({ email });
        if (correoExist) {
            /* return res.status(400).json({
            data : "correo ya registrado"
        }); */
        }

        // encryptar
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        await usuario.save();
        return res.json({
            data: usuario,
        });
    } catch (error) {
        throw error;
        return next();
    }
};

const userPut = async (req, res = response) => {
    const id = req.params.idUser;
    const { _id, password, google, email, ...resto } = req.body;
    // TODO: VALIDADR CONTRA BASE DE DATOS
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await User.findByIdAndUpdate(id, resto);

    return res.json({
        data: usuario,
    });
};

const userDelete = async (req, res = response) => {

    const {idUser} = req.params;
    const uid = req.uid

    /* borrar de la base de datos */

    /* const user = await User.findByIdAndDelete(idUser) */

    const user = await User.findByIdAndUpdate(idUser, {status : false})
    const usertAuthenticate = req.user;
    res.json({ data: user, usertAuthenticate});
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
};
