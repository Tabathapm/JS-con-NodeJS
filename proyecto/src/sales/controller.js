const createError = require('http-errors');
const debug = require('debug')('app: module-sales-controller');

const {} = require('./services');

const { Response } = require('../common/response');
const { ProductsService } = require('../products/services');

module.exports.SalesController = {
    createSale: async (req, res) => {
        try {
          const { body } = req;
     
          if (body || Object.keys(body).length > 0) {
            let product = await ProductsService.getById(body.product);
            let user = await UsersService.getById(body.user);
     
            if (!product || !user || product.stock < body.quantity) {
              Response.error(res,new createErrors.BadRequest('User, product not exists or no stock available'));
            } else {
              const insertedId = await SalesService.create(body);
              Response.success(res, 201, 'The sale has been created', insertedId);
            }
          } else {
            Response.error(res, new createErrors.BadRequest('Error, no body data exists'));
          }
        } catch (error) {
          debug(error);
          Response.error(res);
        }
      }
}