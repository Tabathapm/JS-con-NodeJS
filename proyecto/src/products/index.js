const express = require('express');

// router: nos permite manejar las rutas del modulo independientemente de la app
const router = express.Router();

// dentro del modulo recibimos la app, la que se pasa por parametro, para configurar todo lo que se necesita del modulo
module.exports.ProductsAPI = (app) => {
    router
        .get('/', (req, res) => {})     // http://localhost:3000/api/products/
        .get('/:id', (req, res) => {})  // http://localhost:3000/api/products/23
        .post('/', (req, res) => {})

    app.use('/api/products', router);
}