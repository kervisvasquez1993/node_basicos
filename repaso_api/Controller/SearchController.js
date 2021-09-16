const { response } = require('express');

const search = (req = request, res = response) => {
res.json({data : "respuesta ok"});
}

module.exports = { search }