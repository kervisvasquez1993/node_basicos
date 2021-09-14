const { response, request } = require("express");
const { Category } = require("../Models");
const bcryptjs = require("bcryptjs");
const CategoryIndex = async (req = request, res = respose, next) => {
    res.json({ data: "get desde category" });
    next();
};
(CategoryPost = async (req = request, res = response, next) => {
    const name = req.body.name.toUpperCase();
    const nameDB = await Category.findOne({ name });

    if (nameDB) {
        return res
            .status(400)
            .json({ data: `la categoria ${nameDB.name} ya existe` });
    }
    const data = { name, user: req.user._id };
    const category = new  Category(data);
    await category.save();

    res.status(200).json({data : category});

    next();
}),
    (CategoryPut = async (req = request, res = response, next) => {
        res.json({ data: "put desde category" });
        next();
    }),
    (CategoryShow = async (req = request, res = response, next) => {
        res.json({ data: "show desde category" });
        next();
    }),
    (CategoryDelete = async (req = request, res = response, next) => {
        res.json({ data: "delete desde category" });
        next();
    }),
    (module.exports = {
        CategoryIndex,
        CategoryPost,
        CategoryPut,
        CategoryShow,
        CategoryDelete,
    });
