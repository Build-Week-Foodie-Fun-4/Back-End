const router = require("express").Router();
const upload = require("../../helpers/fileUpload");
const Images = require("./images-model");

router.post("/restaurants", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
      res.send("success");
    }
  });
});

router.post("/dishes", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
      res.send("success");
    }
  });
});

module.exports = router;
