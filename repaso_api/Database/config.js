const mongoose = require("mongoose");
const dbConnection = async () => {
    try {
        
        /* mongodb://localhost/api_fernando */
        await mongoose.connect(process.env.DBMONGOOSE2, {
            useNewUrlParser: true,
            
        });

        console.log('conexión a la base de datos establecida')
    } catch (error) {
        throw new Error("Error en la base de datos");
    }
};

module.exports = {
    dbConnection,
};
