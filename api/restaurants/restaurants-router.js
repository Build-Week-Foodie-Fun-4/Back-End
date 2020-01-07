const router = require("express").Router();
const Restaurants = require("./restaurants-model");
const Reviews = require("../reviews/restaurantReviewModel");
const restValidation = require("../../middleware/restaurant-middleware");

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
router.post("/:id/restaurants", restValidation, (req, res) => {
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
router.delete("/:id/restaurants/:restid", (req, res) => {
  console.log(req.params.restid);
  Restaurants.remove(req.params.restid)
    .then(count => {
      if (count > 0) {
        res
          .status(201)
          .json(
            `Restaurant with id: ${req.params.restid} deleted successfully`
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
router.put("/:id/restaurants/:restid", restValidation, async (req, res) => {
  let count = await Restaurants.update(req.params.restid, req.body);
  let updatedRest = await Restaurants.findById(req.params.restid);
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
router.post("/:id/restaurants/:restid/reviews", (req, res) => {
  Reviews.addRestRev(req.body)
    .then(review => {
      if (review) {
        res.status(201).json(review);
      } else {
        res.status(401).json("Error adding review");
      }
    })
    .catch(err => {
      res.status(500).json("Database Error");
    });
});

// delete restaurant review
router.delete("/:id/restaurants/:restid/reviews/:revid", (req, res) => {
  Reviews.removeRestRev(req.params.revid)
    .then(count => {
      if (count > 0) {
        res
          .status(201)
          .json(`Review with id: ${req.params.restid} deleted successfully`);
      } else {
        res.status(500).json("Something went wrong deleting the review");
      }
    })
    .catch(error => {
      res.status(500).json("Error deleting review");
    });
});

// update restaurant review

// add menu item review

// delete menu item review

// update menu item review

module.exports = router;
