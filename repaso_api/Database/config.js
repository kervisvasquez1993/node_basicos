const mongoose = require("mongoose");
const dbConnection = async () => {
    try {
        
        await mongoose.connect("mongodb://localhost/api_fernando", {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex : true,
            useFindAndModify: false
        });

        console.log('conexión a la base de datos establecida')
    } catch (error) {
        throw new Error("Error en la base de datos");
    }
};

module.exports = {
    dbConnection,
};
