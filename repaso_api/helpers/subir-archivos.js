const path = require("path");
const { v4: uuidv4 } = require("uuid");
const uploadFile = (
    file,
    extensionValida = ["png", "jpg", "gif"],
    carpeta = ""
) => {
    return new Promise((resolve, reject) => {
        const { archivos } = file;
        const nombreCortado = archivos.name.split(".");
        const extension = nombreCortado[nombreCortado.length - 1];
        // validar la extension en el controlador

        if (!extensionValida.includes(extension)) {
            return reject(`La extension permitidas son -- ${extensionValida}`);
        }

        const nameTemp = uuidv4() + "." + extension;

        uploadPath = path.join(__dirname, "../uploads/", carpeta, nameTemp);
        archivos.mv(uploadPath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(uploadPath);
        });
    });
};


module.exports = {uploadFile}