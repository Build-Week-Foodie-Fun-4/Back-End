const router = require("express").Router();
const Users = require("../users/users-model");

// get all users
router.get("/", async (req, res) => {
  let allUsers = await Users.find();
  try {
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).json("No users to retrieve");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// get user by id
router.get("/:id", async (req, res) => {
  let user = await Users.findById(req.params.id);
  try {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("No user with that id found");
    }
  } catch {
    res.status(500).json("Error retrieving user");
  }
});

// delete user
router.delete("/:id", (req, res) => {
  Users.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json(`User with id ${req.params.id} has been removed`);
      } else {
        res.status(404).json({ message: "The user could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error removing user"
      });
    });
});

// edit user
router.put("/:id", (req, res) => {
  Users.update(req.params.id, req.body)
    .then(count => {
      if (count > 0) {
        Users.findById(req.params.id).then(user => {
          res.status(201).json(user);
        });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error updating user" });
    });
});

module.exports = router;
