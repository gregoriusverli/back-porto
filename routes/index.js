const router = require("express").Router();
const projectRouter = require("./projectRouter");

router.use("/project", projectRouter);

module.exports = router;
