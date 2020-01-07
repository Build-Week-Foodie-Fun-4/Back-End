const router = require("express").Router();
const Restaurants = require("./restaurants-model");
const validation = require("../../middleware/restaurant-middleware");

// get all restaurants by user
router.get("/:id/restaurants", async (req, res) => {
  let allRests = await Restaurants.getUserRestaurants(req.params.id);
  try {
    if (allRests) {
      res.status(200).json(allRests);
    } else {
      res.status(404).json("No restaurants for this user to retrieve");
    }
  } catch (error) {
    res.status(500).json("Error retreiving restaurants");
  }
});

// add restaurant
router.post("/:id/restaurants", validation, (req, res) => {
  Restaurants.add(req.body)
    .then(rest => {
      if (rest) {
        res.status(201).json(rest);
      } else {
        res.status(401).json("Error adding restaurant");
      }
    })
    .catch(err => {
      res.status(500).json("Database Error");
    });
});

// delete restaurant
router.delete("/:id/restaurants/:restId", (req, res) => {
  console.log(req.params.restId);
  Restaurants.remove(req.params.restId)
    .then(count => {
      console.log(count);
      if (count > 0) {
        res
          .status(201)
          .json(
            `Restaurant with id: ${req.params.restId} deleted successfully`
          );
      } else {
        res.status(500).json("Something went wrong deleting the restaurant");
      }
    })
    .catch(error => {
      res.status(500).json("Error deleting restaurant");
    });
});

// edit restaurant
router.put("/:id/restaurants/:restId", validation, async (req, res) => {
  let count = await Restaurants.update(req.params.restId, req.body);
  let updatedRest = await Restaurants.findById(req.params.restId);
  try {
    if (count > 0) {
      res.status(201).json({ message: "Update success", updatedRest });
    } else {
      res.status(401).json("Error, please try again");
    }
  } catch (err) {
    res.status(500).json("Error updating restaurant");
  }
});

// add restaurant review

// delete restaurant review

// update restaurant review

// add menu item review

// delete menu item review

// update menu item review

module.exports = router;
