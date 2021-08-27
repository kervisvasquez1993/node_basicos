const multer = require("multer");
const shortid = require("shortid");
const Productos = require("../Models/Productos");

const configuracionMulter = {
    storege: (fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + "../..uploads");
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split("/")[1];
            cb(null, `${shortid.generate()}.${extension}`);
        },
    })),
    fileFilter(req, file, cb) {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, true);
        } else {
            cb(new Error("Formato no valido"));
        }
    },
};

const upload = multer(configuracionMulter).single("imagen");

// sube un archivo

exports.subirArchivo = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mensjae: error });
        }

        return next();
    });
};

exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);
    try {
        if (req.file.filename) {
            producto.imagen = req.file.filename;
        }
        await producto.save();
        return res.json({ data: "Se agrego un nuevo producto" });
    } catch (err) {
        console.log(err);
        return next();
    }
};

exports.indexProducto = async (req, res, next) => {
    try {
        //    obtener todos los productos //
        const productos = await Productos.find({});
        return res.json(productos);
    } catch (err) {
        console.log({ error: err });
        return next();
    }
};

exports.showProducto = async (req, res, next) => {
    const producto = await Productos.findById(req.params.idProducto);
    if (!producto) {
        res.json({ data: "Este producto no existe" });
        return next();
    }
    res.json(producto);
};
// actualiza un producto via id
exports.updateProducto = async (req, res, next) => {
    try {
        let producto = await Productos.findOneAndUpdate({
            _id: req.params.idProducto },
            req.body, {
                new : true,
            });
        return res.json(producto);
    } catch (error) {
        console.log(error);
    }
};
