const db = require("../../database/db-config");

module.exports = {
  addDish,
  findDish,
  findDishById,
  findDishesByRestId,
  findDishBy,
  removeDish,
  updateDish
};

function findDish() {
  return db("dishes");
}

function findDishBy(filter) {
  return db("dishes").where(filter);
}

function findDishById(id) {
  return db("dishes")
    .select("*")
    .where({ id })
    .first();
}

function findDishesByRestId(restid) {
  return db("dishes")
    .select("*")
    .where("restaurant_id", restid);
}

async function addDish(dish) {
  const [id] = await db("dishes").insert(dish, "id");
  return findDishById(id);
}

function removeDish(id) {
  return db("dishes")
    .where({ id })
    .del();
}

function updateDish(id, changes) {
  return db("dishes")
    .where({ id })
    .update(changes, "id");
}
