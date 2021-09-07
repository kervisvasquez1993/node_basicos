const { response } = require('express');
const jwt = require('jsonwebtoken');
const validarJWT = (req = request,res = response, next) => {
    const token = req.header('x-token');
    // validamos que existe en token 
    if(!token )
    {
        return res.status(401).json({
            data : "No hay token en la peticion"
        })
    }
    try {
        jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        next();
    }
    catch(err) {
        console.error(err);
        res.status(401).json({
            data: "token no valido"
        })
    }
    
};


module.exports = { validarJWT }