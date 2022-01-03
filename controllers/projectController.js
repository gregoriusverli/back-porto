const Project = require("../models/projects");

class ProjectController {
  static find(req, res, next) {
    Project.find()
      .then((result) => {
        res.status(200).json(result);
      })

      .catch((err) => {
        console.log(err, "err find");
      });
  }

  static create(req, res, next) {
    const { title, overview, poster_path, popularity, tags } = req.body;

    Project.create({ title, overview, poster_path, popularity, tags })

      .then((result) => {
        res.json(result);
      })

      .catch((err) => {
        console.log(err, "err create");
      });
  }

  static update(req, res, next) {
    const { title, overview, poster_path, popularity, tags } = req.body;
    const id = req.params.id;
    Project.update(id, { title, overview, poster_path, popularity, tags })
      .then((result) => {
        res.json(result);
      })

      .catch((err) => {
        console.log(err, "err update");
      });
  }

  static delete(req, res, next) {
    const id = req.params.id;
    Project.delete(id)
      .then((result) => {
        res.json(result);
      })

      .catch((err) => {
        console.log(err, "err delete");
      });
  }
}

module.exports = ProjectController;
