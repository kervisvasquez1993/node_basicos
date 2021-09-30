const { response, request } = require("express");
const { uploadFile } = require("../helpers");
const { User, Product } = require("../Models");

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
        res.status(400).json({ data: error });
    }
};

const updateFile = async (req, res) => {
    const { id, collection } = req.params;
    let modelo;

    switch (collection) {
        case "usuarios":
            modelo = await User.findById(id);
            console.log(modelo)
            if (!modelo) {
                return res
                    .status(404)
                    .json({ data: `No existe un usuario con el id ${id}` });
            }

            break;
        case "productos":
            modelo = await Product.findById(id);

            if (!modelo) {
                return res
                    .status(404)
                    .json({ data: `No existe un Producto con el id ${id}` });
            }
            break;

        default:
            res.status(500).json({ data: "no se esta validando esto" });
    }
    const pathCompleto = await uploadFile(req.files, undefined, collection);
    modelo.img = pathCompleto;
    await modelo.save();

    res.json({ data: modelo });
};

module.exports = {
    UploadFile,
    updateFile,
};
