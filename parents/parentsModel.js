const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  // remove,
  getById,
}

function getAll() {
  return db('parents');
}

function getById(id) {
  return db('parents').where({id});
}

async function insert(parent) {
  const [id] = await db('parents').insert(parent);
  return db('parents').where({id}).first();
}