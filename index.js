const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();

// middleware to parse json data
app.use(express.json());
// middleware to parse url encoded data
app.use(express.urlencoded({ extended: true }));

// capturing data from url parameters
app.get("/:name", (req, res) => {
  const uid = req.params.name;
  console.log(uid);
  res.send("user id is " + uid);
});

// capturing data from query parameters
app.post("/search", (req, res) => {
  const search = req.query;
  console.log(search);
  res.send(search);
});

// capturing data from body
app.post("/user", upload.none(), (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.send("user created");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
