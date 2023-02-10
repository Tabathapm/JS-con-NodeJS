const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');

const COLLECTION = 'sales';

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray(); 
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    const query = {_id: ObjectId(id)};
    return collection.findOne(query);
}

const create = async (user) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(user);
    return result.insertedId;
}

const deleteSale = async (id) => {

    const collection = await Database(COLLECTION);
    const query      = {_id: ObjectId(id)};
    const result     = await collection.deleteOne(query);
    return result;
}

module.exports.UsersService = {
    getAll,
    getById,
    create,
    deleteSale
}