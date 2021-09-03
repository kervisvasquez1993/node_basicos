const {response } = require('express');
const login = (req,res = response) => {
    res.json({mensaje : "login ok"});
}

module.exports = {
    login
}