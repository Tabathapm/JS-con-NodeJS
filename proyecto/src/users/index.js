const express = require('express');

const { UsersController } = require('./controller');

const router = express.Router();

module.exports.UsersAPI = (app) => {
    router
        .get('/', UsersController.getUsers)           // http://localhost:3000/api/products/
        .get('/del/:id', UsersController.deleteUser)  // http://localhost:3000/api/products/del/
        .get('/upd/:id', UsersController.updateUser)  // http://localhost:3000/api/products/upd/
        .get('/:id', UsersController.getuser)         // http://localhost:3000/api/products/23
        .post('/', UsersController.createUser)


    app.use('/api/users', router);
}