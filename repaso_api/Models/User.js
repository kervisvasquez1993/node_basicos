const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "esta prueba es obligatotio"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatorio"],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});


UserSchema.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id; 
    return user;
};



module.exports = model("User", UserSchema);
