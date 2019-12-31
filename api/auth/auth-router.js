const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
const signToken = require("../../helpers/signToken");
const validateRegistration = require("../../middleware/registration-validation");

router.get("/users", async (req, res) => {
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

router.post("/register", validateRegistration, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json("incorrect");
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({
          token,
          message: `Welcome ${user.username}!`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json("error");
    });
});

module.exports = router;
