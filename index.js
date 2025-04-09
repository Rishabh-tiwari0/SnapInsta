const express = require("express");
const path = require("path");
const app = express();
// middleware
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Login.html"));
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
