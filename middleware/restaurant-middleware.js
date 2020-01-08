const Restaurants = require("../api/restaurants/restaurants-model");

module.exports = (req, res, next) => {
  const { name, cuisine, user_id, street_address, city, state, zip } = req.body;
  if (
    !name ||
    !cuisine ||
    !street_address ||
    !city ||
    !state ||
    !zip ||
    !user_id
  ) {
    res.status(401).json("Restaurant is missing some information");
  } else {
    Restaurants.findBy({ name })
      .first()
      .then(restaurant => {
        if (restaurant) {
          res
            .status(401)
            .json("That restaurant already exists on your account");
        } else {
          next();
        }
      })
      .catch(error => {
        res.status(500).json("Error adding restaurant");
      });
  }
};
