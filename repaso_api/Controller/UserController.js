const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../Models/User");

const userGet = (req = request, res = response) => {
    const query = req.query; /* se puede desectructurar */
    res.json({data : query});

};

const userPost = async (req = request, res = response, next) => {
   
    const {name, email, password, rol } = req.body;
    try
    {
    const usuario = new User({name,email,password,rol});

    // verificar que el correo existe  
    const correoExist = await User.findOne({email})
    if(correoExist)
    {
        /* return res.status(400).json({
            data : "correo ya registrado"
        }); */
    }
    
    // encryptar
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    return res.json({
        data : usuario
    });
    }
    catch(error)
    {
        throw(error);
        return next();
    }
};

const userPut = async (req, res = response) => {
    const id = req.params.idUser;
    const {_id, password, google, email,...resto} = req.body;
    // TODO: VALIDADR CONTRA BASE DE DATOS
    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }


    const usuario = await User.findByIdAndUpdate( id, resto)
    

    return res.json({
        data : usuario
    })
};

const userDelete = (req, res = response) => {
    res.json({ data: "delete api - controlador" });
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
};
