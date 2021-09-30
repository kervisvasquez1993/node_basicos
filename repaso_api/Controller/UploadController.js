const path = require("path");
const { response, request } = require("express");


const UploadFile = async (req, res = response) => {
    let sampleFile;
    let uploadPath;

    if (
        !req.files ||
        Object.keys(req.files).length === 0 ||
        !req.files.archivos
    ) {
        res.status(400).json({ data: "No ha seleccionado ningun archivo" });
        return;
    }

    const { archivos } = req.files;

    uploadPath = path.join(__dirname,"../uploads/" + archivos.name);
    

    archivos.mv(uploadPath,  (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json("File uploaded to " + uploadPath);
    });
};

module.exports = {
    UploadFile,
};
