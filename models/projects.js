const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongo");

class Project {
  static find() {
    return getDatabase().collection("project").find().toArray();
  }

  static create(payload) {
    return getDatabase().collection("project").insertOne(payload);
  }

  static update(id, payload) {
    const idUpd = ObjectId(id);
    return getDatabase()
      .collection("project")
      .updateOne({ _id: idUpd }, { $set: payload });
  }

  static delete(id) {
    const idDel = ObjectId(id);
    return getDatabase().collection("project").deleteOne({ _id: idDel });
  }
}

module.exports = Project;
