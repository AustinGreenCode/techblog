const router =  require("express").Router();
const homeRoutes = require("./homepage");
const dashboardRoutes = require("./dashRoutes");
const loginPageRoutes = require("./loginPageRoutes");
const commentRoutes =  require("./comments");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginPageRoutes);
router.use("/comments", comments);

module.exports = router;