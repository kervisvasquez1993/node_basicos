const { Router } = require("express");
const  {check} = require("express-validator")
const {
    userGet,
    userPost,
    userPut,
    userDelete,
} = require("../Controller/UserController");
const router = Router();
router.get("/", userGet);
router.post(
    "/",
    [check("email", "el correo no es valido").isEmail()],
    userPost
);
router.put("/:idUser", userPut);
router.delete("/", userDelete);

module.exports = router;
