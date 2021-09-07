const jwt = require('jsonwebtoken');
const generarJWT = (uid = '' ) => {
    return new Promise((resolve, reject) => {
        const payload = {uid};
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY,{
            expiresIn : '4h'
        }, (e, token) => {
            if(e)
            {
               console.log(e)
               reject("NO se pudo generar el JWT");
            }
            else
            {
                resolve(token)
            }
        } )
    })
}

module.exports = {generarJWT};