const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log('Database connection successful');  
    } catch (error) {
        console.log(error);
        throw new error('error a la hora de conectarse a la db')
    }
}

module.exports = {
    dbConnection
}