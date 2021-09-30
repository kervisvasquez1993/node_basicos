const { response, request } = require("express");
const { uploadFile } = require("../helpers");

const UploadFile = async (req, res = response) => {
    let uploadPath;

    if (
        !req.files ||
        Object.keys(req.files).length === 0 ||
        !req.files.archivos
    ) {
        res.status(400).json({ data: "No ha seleccionado ningun archivo" });
        return;
    }
    try {
        const pathCompleto = await uploadFile(req.files, undefined, "imgs");
    res.json({
        data: "se subio el archivo correctamente",
        nameFile: pathCompleto,
    });    
    } catch (error) {
        res.status(400).json({data : error});
    }
    
};


const updateFile = async (req, res) => {
    const {id, collection} = req.params;
    res.json({id, collection});
}

module.exports = {
    UploadFile,
    updateFile
};
