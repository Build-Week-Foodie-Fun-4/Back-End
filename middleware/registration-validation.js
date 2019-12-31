const Auth = require("../api/users/users-model");

module.exports = (req, res, next) => {
  const { username, password, email, city, state } = req.body;
  if (!username || !password || !email || !city || !state) {
    res
      .status(400)
      .json("Please provide a username, email, password, and location");
  } else {
    Auth.findBy({ username })
      .first()
      .then(user => {
        if (user) {
          res
            .status(400)
            .json("That username already exists. Please try another");
        } else {
          Auth.findBy({ email })
            .first()
            .then(user => {
              console.log(user);
              if (user) {
                res.status(400).json("That email already exists. Please login");
              } else {
                next();
              }
            })
            .catch(error => {
              res.status(500).json("Error registering userr");
            });
        }
      })
      .catch(error => {
        res.status(500).json("Error registering user");
      });
  }
};
