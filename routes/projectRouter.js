const ProjectController = require("../controllers/projectController");
const router = require("express").Router();

router.get("/", ProjectController.find);
router.post("/add", ProjectController.create);
router.put("/edit/:id", ProjectController.update);
router.delete("/delete/:id", ProjectController.delete);

module.exports = router;
