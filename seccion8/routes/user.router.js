const {Router} = require('express')
const {check} = require('express-validator')
const {
         usersGet, 
         usersPut,
         usersPost,
         usersDeleted
         
      } = require('../controllers/users.controller')

const router = Router()
/* metodo get de nuestra api */
  router.get('/', usersGet);
  router.put('/:id', usersPut);
  router.post('/', [
    check('correo', 'El correo no es valido ').isEmail()
  ], usersPost);
  router.delete('/', usersDeleted);

module.exports = router;