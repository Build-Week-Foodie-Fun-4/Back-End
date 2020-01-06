const router = require("express").Router();
const Restaurants = require("./restaurants-model");

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
router.post("/:id/restaurants", (req, res) => {
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
    .then(deleted => {
      if (deleted) {
        res.status(201).json(success, deleted);
      } else {
        res.status(500).json("Something went wrong deleting the restaurant");
      }
    })
    // .then(count => {
    //   if (count > 0) {
    //     res.status(201).json({ message: "ok" });
    //   } else {
    //     res.status(500).json("Something went wrong deleting the restaurant");
    //   }
    // })
    .catch(error => {
      res.status(500).json("Error deleting restaurant");
    });
});

module.exports = router;
