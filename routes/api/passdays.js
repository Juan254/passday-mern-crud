let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// passday Model
const passdaySchema = require("../../models/passday");
// CREATE passday
router.route("/create-passday").post((req, res, next) => {
  passdaySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
// READ Passday
router.route("/").get((req, res, next) => {
  passdaySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single passday
router.route("/edit-passday/:id").get((req, res, next) => {
  passdaySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Update passday
router.route("/update-passday/:id").put((req, res, next) => {
  passdaySchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("passday updated successfully !");
      }
    }
  );
});
// // Delete passday
// router.route("/delete-passday/:id").delete((req, res, next) => {
//   passdaySchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });
module.exports = router;
