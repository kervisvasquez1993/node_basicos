const dbValidator = require('./dbValidator')
const generarJWT = require('./jwt')
const googleVerify = require('./google-verify')
const uploadFile = require('./subir-archivos')

module.exports = {
    ...dbValidator,
    ...generarJWT,
    ...googleVerify,
    ...uploadFile,
}