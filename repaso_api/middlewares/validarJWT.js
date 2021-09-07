const { response } = require('express');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const validarJWT = async (req = request,res = response, next) => {
    const token = req.header('x-token');
    // validamos que existe en token 
    if(!token )
    {
        return res.status(401).json({
            data : "No hay token en la peticion"
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        /* verificar el usuario que se esta*/
          const user = await User.findById(uid);

          if(!user) {
            return res.status(401).json({data : "token no valido user : no existe"});
          }
        //   si el usuario no a sido borrado
        if(!user.status)
        {
            return res.status(401).json({data : "token no valido user : false"});
        }
          req.user = user;
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