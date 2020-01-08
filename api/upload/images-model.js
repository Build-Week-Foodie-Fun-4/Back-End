const db = require("../../database/db-config");

module.exports = {
  addRestImageUrl,
  addDishImageUrl,
  findDishImgById,
  findRestImgById,
  findImgByDish,
  findImageByRest
};

async function addRestImageUrl(url) {
  const [id] = await db("restaurant_photos").insert(url, "id");
  return findDishImgById(id);
}

async function addDishImageUrl(url) {
  const [id] = await db("dish_photos").insert(url, "id");
  return findDishImgById(id);
}

function findDishImgById(id) {
  return db("dish_photos")
    .select("*")
    .where({ id })
    .first();
}

function findDishImgById(id) {
  return db("dish_photos")
    .select("*")
    .where({ id })
    .first();
}

function findImgByDish(dishid) {
  return db("dish_photos")
    .select("*")
    .where("dish_id", dishid)
    .first();
}

function findImageByRest(restid) {
  return db("restaurant_photos")
    .select("*")
    .where("restaurant_id", restid)
    .first();
}
