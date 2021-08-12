const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = () => connection().then(
  (db) => db.collection('items').find().toArray()
);

const getById = (id) => connection().then(
  (db) => db.collection('items').findOne({ _id: ObjectId(id)})
)

const increaseById = (id) => connection().then(
  (db) => db.collection('items').updateOne({_id: ObjectId(id)}, {$inc: {price: 5}}))

module.exports = {
  getAll,
  getById,
  increaseById,
}