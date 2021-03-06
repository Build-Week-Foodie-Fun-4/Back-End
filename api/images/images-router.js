const router = require("express").Router();
const upload = require("../../helpers/fileUpload");
const Images = require("./images-model");

let url = "https://foodie-fun-be.herokuapp.com";

// post restaurant image by restaurant id
router.post("/restaurants/:id", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      let imgurl = `https://foodie-fun-be.herokuapp.com/${req.file.path}`;
      Images.addRestImageUrl(imgurl, req.params.id);
      res.status(201).json("image uploaded successfully");
    }
  });
});

// post dish image by dish id
router.post("/dishes/:id", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      let imgurl = `https://foodie-fun-be.herokuapp.com/${req.file.path}`;
      Images.addDishImage(imgurl, req.params.id)
        .then(img => {
          res.status(201).json(img);
        })
        .catch(err => {
          res.status(500).json("Error uploading image");
        });
    }
  });
});

// delete dish by id
router.delete("/dishes/:id", (req, res) => {
  Images.deleteDishImg(req.params.id)
    .then(count => {
      if (count > 0) {
        res
          .status(201)
          .json(`Image with id: ${req.params.id} deleted successfully`);
      } else {
        res.status(500).json("Something went wrong deleting the image");
      }
    })
    .catch(error => {
      res.status(500).json("Error deleting restaurant");
    });
});

// delete restaurant by id
router.delete("/restaurants/:id", (req, res) => {
  Images.deleteRestImg(req.params.id)
    .then(count => {
      if (count > 0) {
        res
          .status(201)
          .json(`Image with id: ${req.params.id} deleted successfully`);
      } else {
        res.status(500).json("Something went wrong deleting the image");
      }
    })
    .catch(error => {
      res.status(500).json("Error deleting restaurant");
    });
});

module.exports = router;
