 
const esAdminRole = (req, res = response, next) => 
{
    if(!req.user)
    {
        return res.status(500).json({data : "no se puede verificar el rol sin validar el token primero"});
    }
    const {rol, name} = req.user;
    if(rol !== "ADMIN_ROLE")
    {
        return res.status(401).json({data : `${name} no es administrador- no esta autorizado` });
    }


    next();
}

module.exports = {esAdminRole};
