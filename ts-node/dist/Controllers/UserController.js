"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDelete = exports.userUpdate = exports.userPost = exports.userShow = exports.usersIndex = void 0;
const User_1 = __importDefault(require("../model/User"));
const usersIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findAll();
    res.json({
        data: user,
    });
});
exports.usersIndex = usersIndex;
const userShow = (req, res) => {
    const { id } = req.params;
    res.json({
        data: "show de usar",
        id,
    });
};
exports.userShow = userShow;
const userPost = (req, res) => {
    const { body } = req;
    res.json({
        data: "post de user",
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