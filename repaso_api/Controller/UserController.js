const { response, request } = require("express");
const userGet = (req, res = response) => {
    res.json({ data: "get api - controlador" });
};

const userPost = (req = request, res = response) => {
    const body = req.body;

    return res.json({
        data : body,
    });
};

const userPut = (req = request, res = response) => {
    res.json({ data: "put api - controlador" });
};

const userDelete = (req = request, res = response) => {
    res.json({ data: "delete api - controlador" });
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
};
