const { Router } = require("express");
const { check } = require("express-validator");
const { UploadFile, updateFile } = require("../Controller/UploadController");
const { validarCampos } = require("../middlewares");
const {coleccionPermitida} = require('../helpers')

const router = Router();

router.post("/", UploadFile);

router.put(
    "/:collection/:id",
    [
        check("id", "El id debe ser de mongoose").isMongoId(),
        check("collection").custom((c) =>
            coleccionPermitida(c, ["usuarios", "productos"])
        ),
        validarCampos,
    ],
    updateFile
);

module.exports = router;
