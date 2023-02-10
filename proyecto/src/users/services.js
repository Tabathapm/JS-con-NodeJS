const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');

const COLLECTION = 'users';

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

const updateUser = async (id, newValue) => {

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

const deleteUser = async (id) => {

    const collection = await Database(COLLECTION);
    const query      = {_id: ObjectId(id)};
    const result     = await collection.deleteOne(query);
    return result;
}

module.exports.UsersService = {
    getAll,
    getById,
    create,
    updateUser,
    deleteUser
}