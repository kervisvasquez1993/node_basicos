import { DataTypes } from "sequelize";
import db from '../config/db';

const User = db.define('Users', {
    name : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
    status : {
        type : DataTypes.BOOLEAN
    },
})


export default User