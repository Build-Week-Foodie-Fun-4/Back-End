const router = require("express").Router();
const Restaurants = require("./restaurants-model");

// get all restaurants by user
router.get("/:id/restaurants", async (req, res) => {
  let allRests = await Restaurants.findById(req.params.id);
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
      console.log(rest);
      res.status(201).json(rest);
    })
    .catch(err => {
      res.status(500).json("Whyyyyyyy");
    });
});

// delete restaurant
// router.delete("/:id", (req, res) => {
//   Restaurants.remove(req.params.id)
//     .then(res => {
//       res.status(201).json({ rest, message: "ok" });
//     })
//     .catch(error => {
//       res.status(500).json("Error deleting restaurant");
//     });
// });

module.exports = router;
