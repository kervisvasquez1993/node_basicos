const { Router } = require('express');
const {userGet, userPost, userPut, userDelete } = require('../Controller/UserController')
const router = Router();
router.get("/", userGet); 
router.post("/", userPost);
router.put("/", userPut);
router.delete("/", userDelete); 


module.exports = router;