const express = require('express');

const { ProductsController } = require('./controller');

// router: nos permite manejar las rutas del modulo independientemente de la app
const router = express.Router();

// dentro del modulo recibimos la app, la que se pasa por parametro, para configurar todo lo que se necesita del modulo
module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts)           // http://localhost:3000/api/products/
        .get('/report', ProductsController.generateReport)  // http://localhost:3000/api/products/report
        .get('/del/:id', ProductsController.deleteProduct)  // http://localhost:3000/api/products/del/
        .get('/upd/:id', ProductsController.updateProduct)  // http://localhost:3000/api/products/upd/
        .get('/:id', ProductsController.getProduct)         // http://localhost:3000/api/products/23
        .post('/', ProductsController.createProduct)

        // mongodb.com => docs => drivers => nodejs
        // Usage Examples

    app.use('/api/products', router);
}