const { respose } = require('express')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')


 const User = require('../models/user'); 
 /* metodo get */
function usersGet(req , res )  
{

  const {q, name} = req.query
    
    res.json({
        
        'msg' : "getApi desde el controlador ",
         data : {
           q,
           name
         }
    })
  }


  function usersPut(req, res)
  {
    const id = req.params.id
    res.json({
        
        'msg' : "put desde el controlador ",
        id,
        
    })
  }
  /* metodo post */

  async function usersPost(req, res)
  {
    const {nombre, correo, password, role} = req.body;
    const user = new User({nombre, correo,password, role});
    /* validacion de datos */
    /* validar correro */

    const ExistEmail = await User.findOne({correo})
    if(ExistEmail)
    {
      return res.status(400).json({
        msg: "correo ya existe"
        })
    }
    /* encriptar la contraseña de nuestra contraseña */
    const salt = bcryptjs.genSaltSync(); 
    user.password = bcryptjs.hashSync(password, salt); 

    /* guardar datos */
     await user.save(); 

    res.json({
        
        'msg' : "post desde el controlador ",
         user,
         /* salt */
    })
  }

  function usersDeleted(req, res)
  {
    res.json({
        
        'msg' : "deleted desde el controlador"
    })
  }


  module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDeleted,
  }