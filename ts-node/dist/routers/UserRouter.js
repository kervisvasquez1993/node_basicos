"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../Controllers/UserController");
const router = (0, express_1.Router)();
router.get("/", UserController_1.usersIndex);
router.get("/:id", UserController_1.userShow);
router.post("/", UserController_1.userPost);
router.put("/:id", UserController_1.userUpdate);
router.delete("/:id", UserController_1.userDelete);
exports.default = router;
//# sourceMappingURL=UserRouter.js.map