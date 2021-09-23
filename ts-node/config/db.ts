import {Sequelize}  from 'sequelize'

const db = new Sequelize('ts-node', "root", "Kervisvasquez1993", {
    host : process.env.HOST,
    dialect : "mysql",
    
})


export default db