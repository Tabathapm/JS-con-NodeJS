const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');
const { ProductsUtils } = require('./utils');

const COLLECTION = 'products';

// database es asíncrono, por lo tanto retorna una promesa (async + await)
const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray(); // *find()* recibe como parametro un objeto, nos devuelve un cursor
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    const query = {_id: ObjectId(id)};
    return collection.findOne(query);
}

const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

const generateReport = async (name, res) => {
    let products = await getAll();
    ProductsUtils.excelGenerator(products, name, res)
}

// update
const updateProduct = async (id, newValue) => {

    const collection = await Database(COLLECTION);
    const filtro     = {_id: ObjectId(id)};
    const opciones   = {upsert: false};

    const update = {
        $set: {
            ...newValue
        }
    };

    const result = await collection.updateOne(filtro, update, opciones);
    return await getById(id);
}
// delete
const deleteProduct = async (id) => {

    const collection = await Database(COLLECTION);
    const query      = {_id: ObjectId(id)};
    const result     = await collection.deleteOne(query);
    return result;
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport,
    updateProduct,
    deleteProduct
}