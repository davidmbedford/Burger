const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
// Serves static content
app.use(express.static("public"));
// Parse body as JSON, not using body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");
app.use(routes);
// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
