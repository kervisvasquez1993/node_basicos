"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('ts-node', "root", "Kervisvasquez1993", {
    host: process.env.HOST,
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=db.js.map