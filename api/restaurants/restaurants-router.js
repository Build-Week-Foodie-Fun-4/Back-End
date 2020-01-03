const router = require("express").Router();
const Restaurants = require("./restaurants-model");

// get all restaurants by user
router.get("/", async (req, res) => {
  let user_id = req.params.id;
  let allRests = await Restaurants.findBy(user_id);
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
// router.post("/", (req, res) => {});

// update restaurant
// router.put();

// delete restaurant

module.exports = router;
