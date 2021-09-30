const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { response, request } = require("express");

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

    const { archivos } = req.files;
    const nombreCortado = archivos.name.split(".");
    const extension = nombreCortado[nombreCortado.length - 1];
    // validar la extension en el controlador
    const extensionValida = ["png", "jpg", "gif"];

    if (!extensionValida.includes(extension)) {
        return res
            .status(400)
            .json({ data: `La extension permitidas son , ${extensionValida}` });
    }

    const nameTemp = uuidv4() + "." + extension;

    uploadPath = path.join(__dirname, "../uploads/" + nameTemp);
    archivos.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json("File uploaded to " + uploadPath);
    });
};

module.exports = {
    UploadFile,
};
