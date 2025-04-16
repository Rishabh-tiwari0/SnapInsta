const express = require("express");
const app = express();
const multer = require("multer");
const { connectDB } = require("./database/connectDB.js");
require("dotenv").config();
const Post = require("./models/postModel.js");
const postRouter = require("./Routes/postRouter.js");

const upload = multer();

// middleware to parse json data
app.use(express.json());
// middleware to parse url encoded data
app.use(express.urlencoded({ extended: true }));
// database connection
connectDB();

// creating posts on  database
app.use("/api");

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
