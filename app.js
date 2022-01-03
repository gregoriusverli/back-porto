const express = require("express");
const { connect } = require("./config/mongo");
const app = express();
const PORT = 3636;
const json = express.json();
const routes = require("./routes");
app.use(express.urlencoded({ extended: true }));
app.use(json);
connect();
app.use(routes);
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
