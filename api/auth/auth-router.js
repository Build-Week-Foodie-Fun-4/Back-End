const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
const signToken = require("../../helpers/signToken");
const validateRegistration = require("../../middleware/registration-validation");

router.post("/register", validateRegistration, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  const token = signToken(user);
  Users.add(user)
    .then(saved => {
      res.status(201).json({
        token: token,
        id: saved.id,
        username: saved.username,
        email: saved.email,
        city: saved.city,
        state: saved.state,
        message: `Welcome ${user.username}!`
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        console.log(token);
        res.status(200).json({
          token,
          user_id: user.id,
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
