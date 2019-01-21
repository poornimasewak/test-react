const router = require("express").Router();
const studentController = require("../../controllers/studentController");

// Matches with "/api/student"
router.route("/")
    // .get(booksController.findAll)
    .post(function () {
        console.log("post works");

    });

module.exports = router;