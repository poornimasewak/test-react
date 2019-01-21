const router = require("express").Router();
const studentRoutes = require("./students");

// Book routes
router.use("/student", studentRoutes);
// hello
module.exports = router;
