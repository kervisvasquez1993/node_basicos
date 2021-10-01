const { Router } = require("express");
const { check } = require("express-validator");
const { UploadFile, updateFile } = require("../Controller/UploadController");
const { validarCampos, validateFile } = require("../middlewares");
const { coleccionPermitida } = require("../helpers");

const router = Router();

router.post("/", validateFile, UploadFile);

router.put(
    "/:collection/:id",
    [
        validateFile,
        check("id", "El id debe ser de mongoose").isMongoId(),
        check("collection").custom((c) =>
            coleccionPermitida(c, ["usuarios", "productos"])
        ),
        validarCampos,
    ],
    updateFile
);

module.exports = router;
