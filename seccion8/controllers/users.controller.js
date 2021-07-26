const { respose } = require('express')
function usersGet(req, res)  
{
    
    res.json({
        
        'msg' : "getApi desde el controlador "
    })
  }


  function usersPut(req, res)
  {
    res.json({
        
        'msg' : "put desde el controlador "
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