const {Schema, model} = require('mongoose')


const UserSchema = Schema({
    nombre : {
        type : String,
        required : [true, 'El Usuario es requrerido'],
        unique: true,
    },
    correo : {
        type: String,
        required : [true, 'El true es Obligatorio'],
        unique: true,
    },
    password : {
        type: String,
        required : [true, 'La contraseña es requerida']
    },
    role : {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado : {
        type: Boolean,
        default:true
    },
    google : {
        type: Boolean,
        default:false
    }
});

module.exports = model('User', UserSchema);