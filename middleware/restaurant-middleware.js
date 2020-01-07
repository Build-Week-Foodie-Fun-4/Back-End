const Restaurants = require("../api/restaurants/restaurants-model");

module.exports = (req, res, next) => {
  const { name, user_id, cuisine, street_address, city, state, zip } = req.body;
  if (
    !name ||
    !user_id ||
    !cuisine ||
    !street_address ||
    !city ||
    !state ||
    !zip
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
