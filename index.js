const express = require("express");
const path = require("path");
const { title } = require("process");
const app = express();
// middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
// setting template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("login", {
    title: "rishabh",
  });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
