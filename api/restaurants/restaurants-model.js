const db = require("../../database/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update,
  getUserRestaurants
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
  const [id] = await db("restaurants").insert(restaurant, "id");
  return findById(id);
}

function remove(id) {
  return db("restaurants")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("restaurants")
    .where({ id })
    .update(changes, "id");
}

function getUserRestaurants(user_id) {
  return db("restaurants")
    .select("restaurants.*")
    .join("users", "restaurants.user_id", "users.id")
    .where("user_id", user_id);
}
