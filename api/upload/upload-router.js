const router = require("express").Router();
const upload = require("../../helpers/fileUpload");
const ImageUpload = require("./upload-model");

router.post("/", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
      res.send("success");
      // add to database function from model
    }
  });
});

module.exports = router;
