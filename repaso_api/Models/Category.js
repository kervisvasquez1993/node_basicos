const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
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

CategorySchema.methods.toJSON = function () {
    const { __v, status, _id, ...category } = this.toObject();
    category.id = _id; 
    return category;
};

module.exports = model("Category", CategorySchema);
