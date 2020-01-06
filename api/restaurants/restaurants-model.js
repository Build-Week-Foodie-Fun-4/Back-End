const db = require("../../database/db-config");

module.exports = {
  add,
  addByUserId,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("restaurants");
}

function findBy(filter) {
  return db("restaurants").where(filter);
}

function findById(id) {
  return db("restaurants")
    .select("*")
    .where({ id })
    .first();
}

async function add(restaurant) {
  const [id] = await db("restaurant").insert(restaurant, "id");
  return findById(id);
}

async function addByUserId(restaurant, user_id) {
  const [id] = await db("restaurant")
    .insert(restaurant, "id")
    .where("user_id", user_id);
  return findById(id);
}

function remove(id) {
  return db("restaurant")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("restaurants")
    .where({ id })
    .update(changes, "*");
}
