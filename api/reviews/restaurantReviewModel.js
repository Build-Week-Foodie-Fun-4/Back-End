const db = require("../../database/db-config");

module.exports = {
  addRestRev,
  findRestRevs,
  findRestRevByRestId,
  removeRestRev,
  updateRestRev
};

function findRestRevs() {
  return db("restaurant_reviews");
}

function findRestRevBy(filter) {
  return db("restaurant_reviews").where(filter);
}

function findRestRevByRestId(restid) {
  return db("restaurant_reviews")
    .select("*")
    .where("restaurant_id", restid)
    .first();
}

async function addRestRev(review) {
  const [id] = await db("restaurant_reviews").insert(review, "id");
  return findRestRevById(id);
}

function removeRestRev(id) {
  return db("restaurant_reviews")
    .where({ id })
    .del();
}

function updateRestRev(id, changes) {
  return db("restaurant_reviews")
    .where({ id })
    .update(changes, "id");
}
