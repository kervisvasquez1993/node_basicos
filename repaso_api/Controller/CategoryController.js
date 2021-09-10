const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
    const CategoryIndex = async(req = request, res = respose, next) => {
        res.json({data : "get desde category"});
        next();
    }
    CategoryPost = async(req = request, res = response, next) => {
        res.json({data : "post desde category"});
        next();
    },
    CategoryPut = async(req = request, res = response, next) => {
        res.json({data : "put desde category"});
        next();
    },
    CategoryShow = async(req = request, res = response, next) => {
        res.json({data : "show desde category"});
        next();
    },
    CategoryDelete = async(req = request, res = response, next) => {
        res.json({data : "delete desde category"});
        next();
    },

module.exports = {
    CategoryIndex,
    CategoryPost,
    CategoryPut,
    CategoryShow,
    CategoryDelete,
};
