const {Schema, model} = require('mongoose')

const RoleSchema = Schema({
    rol : {
        type : String,
        require: [true, 'El Rol es Oblgatorio']
    }
})

module.exports = model('Rol', RoleSchema)