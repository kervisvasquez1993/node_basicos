const { response, request } = require("express");
const { Product } = require("../Models");
/* index from category */

/*
 * Listar productos con status en true
 */

const ProductIndex = async (req = request, res = response, next) => {
    const { limit = 4, desde = 0 } = req.query;
    const query = { status: true };
    const product = Product.find(query)
        .populate("user", "name")
        .skip(Number(desde))
        .limit(Number(limit));

    const total = Product.countDocuments(query);
    const [prod, total_product] = await Promise.all([product, total]);
    res.json({ data: prod, total_product });
    next();
};

/*
 *   Crear Producto
 */
const ProductStore = async (req = request, res = response, next) => {
    /* validar que la categoria no exista */
    const name1= req.body.name.toUpperCase();
    const nameDB = await Product.findOne({name : name1});
    if(nameDB)
    {
        return res.json({data : `El Producto ${nameDB.name} ya existe`});
    }
    /* creacion de const data */
    const { status, user, ...body } = req.body;
    const data = {
        name: body.name.toUpperCase(),
        precing : body.precing,
        description: body.description,
        category: body.category,
        user: req.user.id,
    };
    const producto = new Product(data);
    await producto.save();
    res.json({ data: producto });
};

/* 
+ Actualizar Producto
*/

const ProductUpdate = async (req = request, res = response, next) => {
    const id = req.params.id;
    const {status, user, ...resto} = req.body;
    resto.name = resto.name.toUpperCase();
    // const product = await Product.findByIdAndUpdate(id, resto, {new : true});
    const product = await Product.findByIdAndUpdate(id, resto, {new : true});
    if(!product)
    {   
        return res.status(404).json({data : `el ID ${id} no esta asociado a ningun producto`})
    }
    res.status(201).json({ data: product});

    
};

const ProductShow = async (req = request, res = response, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if(!product)
    {   
        return res.status(404).json({data : `el ID ${id} no esta asociado a ningun producto`})
    }
    /* console.log(product);
    product.update(); */
    res.json({data : product})
    
    
};

const ProductDelete = (req = request, res = response, next) => {
    const id = req.params.id;
    const product = await Category.findByIdAndUpdate(id, {status : false}, {new : true})
    if(!product)
    {   
        return res.status(404).json({data : `el ID ${id} no esta asociado a ningun producto`})
    }
    res.status(201).json({ data: product });
};

module.exports = {
    ProductIndex,
    ProductStore,
    ProductUpdate,
    ProductShow,
    ProductDelete,
};
