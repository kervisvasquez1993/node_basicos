const {Router} = require('express')
const {
         usersGet, 
         usersPut,
         usersPost,
         usersDeleted
         
      } = require('../controllers/users.controller')

const router = Router()
/* metodo get de nuestra api */
  router.get('/', usersGet);
  router.put('/', usersPut);
  router.post('/', usersPost);
  router.delete('/', usersDeleted);

module.exports = router;