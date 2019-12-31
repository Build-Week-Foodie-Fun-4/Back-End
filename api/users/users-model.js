const db = require("../../database/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function find() {
  return db("users").select("id", "username", "email", "city", "state");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username", "email", "city", "state")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
