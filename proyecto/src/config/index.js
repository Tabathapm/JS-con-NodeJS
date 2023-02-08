require('dotenv').config();

// retorna algo como un objeto
module.exports.Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDbname: process.env.MONGO_DBNAME
}