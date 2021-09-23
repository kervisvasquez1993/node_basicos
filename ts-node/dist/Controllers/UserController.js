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
const userShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.default.findByPk(id);
    if (!user) {
        return res.json({ data: `No existe un asuario con el id ${id}` });
    }
    res.json({
        data: user,
        id,
    });
});
exports.userShow = userShow;
const userPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existEmail = yield User_1.default.findOne({
            where: { email: body.email },
        });
        if (existEmail) {
            return res
                .status(400)
                .json({ data: `ya existe un email con este` });
        }
        const user = yield User_1.default.create(body);
        res.json({ data: user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: `Hable con el admin`,
        });
    }
});
exports.userPost = userPost;
const userUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                data: `El usuario con el id : ${id} no esta saociado a ningun usuario`,
            });
        }
        yield user.update(body);
        res.json({ data: user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: `Hable con el admin`,
        });
    }
});
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