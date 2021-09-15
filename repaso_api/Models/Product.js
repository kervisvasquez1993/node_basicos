const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, "El Nombre es requerido"],
        unique: true,
    },
    status: {
        type: Boolean,
        default: true,
        required : true,
    },
    user : {
        type: Schema.Types.ObjectId,
        ref : "User",
        required : true
    }

});

ProductSchema.methods.toJSON = function () {
    const { __v, status, _id, ...product } = this.toObject();
    product.id = _id; 
    return product;
};

module.exports = model("Product", ProductSchema);
