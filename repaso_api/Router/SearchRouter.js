const { Router } = require("express");
const { search } = require("../Controller/SearchController");

const router = Router();

router.get("/", search);

module.exports = router;
