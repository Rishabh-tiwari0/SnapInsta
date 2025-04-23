require("dotenv").config();
const express = require("express");
const app = express();
const multer = require("multer");
const { connectDB } = require("./database/connectDB.js");
const postRouter = require("./Routes/postRouter.js");
const userRouter = require("./Routes/userRouter.js");

const upload = multer();

// middleware to parse json data
app.use(express.json());
// middleware to parse url encoded data
app.use(express.urlencoded({ extended: true }));
// database connection
connectDB();

// creating posts on  database
app.use("/api/posts", postRouter);
// routes for user
app.use("/api/user", userRouter);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
