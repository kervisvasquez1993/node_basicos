const { response, request } = require("express");
const { Category } = require("../Models");
const bcryptjs = require("bcryptjs");
/* index from category */
const CategoryIndex = async (req = request, res = respose, next) => {
    // obtener categorias  -paginado - total -populate
    const { limit = 4, desde = 0 } = req.query;
    const query = { status: true };
    const category = Category.find(query)
        .populate("user", "name")
        .skip(Number(desde))
        .limit(Number(limit));

    const total = Category.countDocuments(query);
    const [cat, total_category] = await Promise.all([category, total]);
    res.json({ data: cat, total_category });
    next();
};
// show category
const CategoryShow = async (req = request, res = response, next) => {
    const id = req.params.id;
    const category = await Category.findById(id).populate('user', 'name');
    res.json({ data: category });
    next();
};
// create category
const CategoryPost = async (req = request, res = response, next) => {
    const name = req.body.name.toUpperCase();
    const nameDB = await Category.findOne({ name });
    if (nameDB) {
        return res
            .status(400)
            .json({ data: `la categoria ${nameDB.name} ya existe` });
    }
    const data = { name, user: req.user._id };
    const category = new Category(data);
    await category.save();
    res.status(200).json({ data: category });
};
// update category
const CategoryPut = async (req = request, res = response, next) => {
    const id = req.params.id;
    const { status, user, ...resto } = req.body;
    resto.name = resto.name.toUpperCase();
    /*data.user = req.user._id;*/
    const category = await Category.findByIdAndUpdate(id, resto, {new : true});
    res.json({ data: category });
    next();
};
// deleted category
const CategoryDelete = async (req = request, res = response, next) => {
    const id = req.params.id;
    const categoryDeleted = await Category.findByIdAndUpdate(id, {status : false}, {new : true})
    res.json({ data: categoryDeleted });
    next();
};
module.exports = {
    CategoryIndex,
    CategoryPost,
    CategoryPut,
    CategoryShow,
    CategoryDelete,
};
