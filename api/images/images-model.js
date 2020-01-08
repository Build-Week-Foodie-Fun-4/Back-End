const db = require("../../database/db-config");

module.exports = {
  addRestImage,
  addDishImage,
  findDishImgById,
  findRestImgById,
  findImgByDish,
  findImgByRest,
  deleteDishImg,
  deleteRestImg
};

async function addDishImage(url, dishid) {
  const [id] = await db("dish_photos").insert(
    {
      dish_image_url: url,
      dish_id: dishid
    },
    "id"
  );
  return findDishImgById(dishid);
}

async function addRestImage(url, restid) {
  const [id] = await db("restaurant_photos").insert(
    {
      restaurant_image_url: url,
      restaurant_id: restid
    },
    "id"
  );
  return findRestImgById(restid);
}

function findDishImgById(id) {
  return db("dish_photos")
    .select("*")
    .where({ id })
    .first();
}

function findRestImgById(id) {
  return db("restaurant_photos")
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

function findImgByRest(restid) {
  return db("restaurant_photos")
    .select("*")
    .where("restaurant_id", restid)
    .first();
}

function deleteDishImg(id) {
  return db("dish_photos")
    .where({ id })
    .del();
}

function deleteRestImg(id) {
  return db("restaurant_photos")
    .where({ id })
    .del();
}
