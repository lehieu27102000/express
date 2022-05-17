const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// http loger
const morgan = require("morgan");
// template engine
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "resources", "views"));
app.get("/", (req, res) => {
  // res.send("hiếu đẹp trai");
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
