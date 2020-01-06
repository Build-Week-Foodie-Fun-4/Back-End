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
//TODO need restaurant validation
router.post("/", (req, res) => {
  console.log(req.body);
  Restaurants.add(req.body)
    .then(rest => {
      console.log(rest);
      res.status(201).json(rest);
    })
    .catch(err => {
      res.status(500).json("Whyyyyyyy");
    });
});

// router.post("/", async (req, res) => {
//   const newRest = await Restaurants.add(req.params.id, req.body);
//   console.log(newRest);
//   try {
//     if (newRest) {
//       res.status(201).json(newRest);
//     } else {
//       res.status(401).json("something went wrong");
//     }
//   } catch (error) {
//     res.status(500).json("Error adding restaurant");
//   }
// });

// update restaurant
// router.put();

// delete restaurant

module.exports = router;
