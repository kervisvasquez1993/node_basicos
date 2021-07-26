const { respose } = require('express')
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

  function usersPost(req, res)
  {
const data = req.body;

    res.json({
        
        'msg' : "post desde el controlador ",
         data
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