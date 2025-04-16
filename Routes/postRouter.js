const express = require("express");
const router = express.Router();

router.post("/posts", async (req, res) => {
  const { title, body, author } = req.body;
  try {
    const post = await Post.create({
      title: title,
      body: body,
      author: author,
    });
    res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
