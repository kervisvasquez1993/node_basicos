const { Router } = require("express");
const { check } = require("express-validator");
const {UploadFile} = require("../Controller/UploadController")



const router = Router();

router.get('/', UploadFile);

module.exports = router;
