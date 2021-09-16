const { Router } = require("express");
const { check } = require("express-validator");
const {UploadFile} = require("../Controller/UploadController")



const router = Router();

router.post('/', UploadFile);

module.exports = router;
