const router = require("express").Router();
const upload = require("../../helpers/fileUpload");

router.post("/", (req, res) => {
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
