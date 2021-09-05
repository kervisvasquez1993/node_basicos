const {response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../Models/User');
const login =async  (req,res = response) => {

    const {email, password} = req.body;
    try {
        
        const user = await  User.findOne({email});
        if(!user)
        {
            return res.status(400).json({data: "Usuario /password no son correcto - correo" });
        }
        /* verificar la contraseña */
        if(!user.status)
        {
            return res.status(400).json({
                data : "el usuario /Password no son correcto - estado : falso"
            });
        }
        /* si el usuario esta activo */


        // verificar la contraseña
        const validPassword  =  bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({data : "Usuario / Passowrd no son correctro- password"})
        }

        // generar el jwt
        /*  */
        return   res.json({
            data : 'ĺogin ok'
        })

    } catch (error) {
        
        return res.status(500).json({
            data : error.message
        })
    }
    res.json({mensaje : "login ok"});
}

module.exports = {
    login
}