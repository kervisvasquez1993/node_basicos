const { response, request } = require("express");
const User = require("../Models/User");
const userGet = (req = request, res = response) => {
    const query = req.query; /* se puede desectructurar */
    res.json({data : query});

};

const userPost = async (req = request, res = response, next) => {
    
    const body = req.body;
    try
    {
    const usuario = new User(body);

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

const userPut = (req, res = response) => {
    const id = req.params.idUser;

    return res.json({
        data : id
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
