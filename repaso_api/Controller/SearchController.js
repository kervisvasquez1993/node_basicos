const { response } = require("express");
const { ObjectId } = require("mongoose").Types;
const { User, Category, Product } = require("../Models");
const coleccionesPermitidas = ["user", "category", "product", "roles"];

const SearchUser = async (terminos = "", res = response) => {
    const isMongoId = ObjectId.isValid(terminos);
    console.log(terminos, "desde function");
    if (isMongoId) {
        const user = await User.findById({ terminos });

        return res.json({ result: (user) ? [user] : `No existe ningun susuario asociado al ID ${terminos}`});
    }

    const regex = new RegExp(terminos, 'i')
    const user = await User.find({
        $or : [{name : regex}, { email : regex}],
        $and : [{status : true}]

    })

    res.json({data : user})


};

const search = (req = request, res = response) => {
    const { collection, termino } = req.params;
    console.log(req.params);
    if (!coleccionesPermitidas.includes(collection)) {
        return res.status(400).json({
            data: `las colecciones permitida son ${coleccionesPermitidas}`,
        });
    }

    switch (collection) {
        case "user":
            SearchUser(termino, res);
            break;
        case "category":
            break;
        case "product":
            break;
        default:
            res.status(500).json({
                data: "error inesperado",
            });
    }
};

module.exports = { search };
