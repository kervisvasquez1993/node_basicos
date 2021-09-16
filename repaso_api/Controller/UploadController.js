const { response, request } = require("express");

const UploadFile = async (req, res = response) => {
    res.json({data : "ok"});
}

module.exports = {
    UploadFile
};
