const {Router} = require('express')
const {check} = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')
const Rol = require('../models/rol')


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
    check('nombre', 'El Nombre es Obligatorio ').not().isEmpty(),
    check('correo', 'El correo no es valido ').isEmail(),
    check('password', 'El Password es Obligatorio, y ser mayor a 6').isLength({min:6}),
    /* check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']), */
    check('role').custom(async (role = '') =>
    {
      
      const exiteRol = await Rol.findOne({role});  
    
      if(!exiteRol)
      {
        throw new Error(`El rol ${role} no esta registrado en la base de datos` );
      }
    }),
    validarCampos
  ], usersPost);
  router.delete('/', usersDeleted);

module.exports = router;