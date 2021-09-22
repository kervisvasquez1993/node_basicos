import { Router } from "express";
import { usersIndex, userShow, userPost, userUpdate, userDelete } from '../Controllers/UserController';

const router = Router();

router.get("/", usersIndex);
router.get("/:id", userShow);
router.post("/", userPost);
router.put("/:id", userUpdate);
router.delete("/:id", userDelete);


export default router;
