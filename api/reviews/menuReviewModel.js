const db = require("../../database/db-config");

module.exports = {
  addMenuRev,
  findMenuRevs,
  findMenuRevById,
  findMenuRevBy,
  removeMenuRev,
  updateMenuRev
};

function findMenuRevs() {
  return db("menu_item_reviews");
}

function findMenuRevBy(filter) {
  return db("menu_item_reviews").where(filter);
}

function findMenuRevById(id) {
  return db("menu_item_reviews")
    .select("*")
    .where({ id })
    .first();
}

async function addMenuRev(review) {
  const [id] = await db("menu_item_reviews").insert(review, "id");
  return findMenuRevById(id);
}

function removeMenuRev(id) {
  return db("menu_item_reviews")
    .where({ id })
    .del();
}

function updateMenuRev(id, changes) {
  return db("menu_item_reviews")
    .where({ id })
    .update(changes, "id");
}
