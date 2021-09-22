"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDelete = exports.userUpdate = exports.userPost = exports.userShow = exports.usersIndex = void 0;
const usersIndex = (req, res) => {
    res.json({
        data: "user",
    });
};
exports.usersIndex = usersIndex;
const userShow = (req, res) => {
    const { id } = req.params;
    res.json({
        data: "show users",
        id,
    });
};
exports.userShow = userShow;
const userPost = (req, res) => {
    const { body } = req;
    res.json({
        data: "show users",
        body,
    });
};
exports.userPost = userPost;
const userUpdate = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        data: "update update",
        body,
        id,
    });
};
exports.userUpdate = userUpdate;
const userDelete = (req, res) => {
    const { id } = req.params;
    res.json({
        data: "delete update",
        id,
    });
};
exports.userDelete = userDelete;
//# sourceMappingURL=UserController.js.map