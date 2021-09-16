const { Router } = require("express");
const { search } = require("../Controller/SearchController");

const router = Router();

router.get("/:collection/:termino", search);

module.exports = router;
