const { response } = require("express");
const { ObjectId } = require("mongoose").Types;
const { User, Category, Product } = require("../Models");
const coleccionesPermitidas = ["user", "category", "product", "roles"];
/*
 * buscar usuario
 */
const isMongoId = (id) => {
    const valor = ObjectId.isValid(id);
    return valor;
};
const SearchUser = async (terminos = "", res = response) => {
    if (isMongoId(terminos)) {
        const user = await User.findById(terminos);
        return res.json({
            result: user
                ? [user]
                : `No existe ningun usuario asociado al ID ${terminos}`,
        });
    }

    const regex = new RegExp(terminos, "i");
    const user = await User.find({
        $or: [{ name: regex }, { email: regex }],
        $and: [{ status: true }],
    });

    res.json({ data: user });
};

/*
 * buscar categoria
 */

const SearCategory = async (terminos = "", res = response) => {
    if (isMongoId(terminos)) {
        const category = await Category.findById(terminos);
        return res.json({
            result: category
                ? [category]
                : `No existe ninguna categoria asociada al ID ${terminos}`,
        });
    }

    const regex = new RegExp(terminos, "i");
    const category = await Category.find({
        $or: [{ name: regex }],
        $and: [{ status: true }],
    });

    res.json({ data: category });
};
/*
 * Buscar producto
 */

const SearchProduct = async (terminos = "", res = response) => {

    if (isMongoId(terminos)) {
        const product = await Product.findById(terminos);
        return res.json({
            result: product
                ? [product]
                : `No existe ninguna Producto asociada al ID ${terminos}`,
        });
    }

    const regex = new RegExp(terminos, "i");
    const product = await Product.find({
        $or: [{ name: regex }],
        $and: [{ status: true }],
    });

    res.json({ data: product });

}

/* function search */

const search = (req = request, res = response) => {
    const { collection, termino } = req.params;
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
            SearCategory(termino, res);
            break;
        case "product":
            SearchProduct(termino, res);
            break;
        default:
            res.status(500).json({
                data: "error inesperado",
            });
    }
};

module.exports = { search };
