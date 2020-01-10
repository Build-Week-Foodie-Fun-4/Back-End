const Dishes = require("../api/reviews/dishesModel");

module.exports = (req, res, next) => {
  if (!req.body.restaurant_id || !req.body.dish_name || !req.body.dish_rating) {
    res.status(401).json("Dish is missing some information");
  } else {
    let dish_name = req.body.dish_name;
    Dishes.findDishBy({ dish_name })
      .first()
      .then(dish => {
        if (dish && dish.restaurant_id === req.body.restaurant_id) {
          res.status(401).json("You already added this dish");
        } else {
          next();
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json("Error adding dish");
      });
  }
};
