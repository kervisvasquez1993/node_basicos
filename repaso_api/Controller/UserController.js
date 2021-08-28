const { response, request = request } = require("express");
const userGet = (req = request, res = response) => {
    const query = req.query; /* se puede desectructurar */
    res.json({data : query});

};

const userPost = (req, res = response) => {
    const body = req.body;

    return res.json({
        data : body,
    });
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
