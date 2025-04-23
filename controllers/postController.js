const Post = require("../models/postModel.js");
async function createPost(req, res) {
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
}
// get all posts by authorname
const getAllPosts = async (req, res) => {
  const author = req.params.author.toLowerCase();

  await Post.find({ author: author })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete({
      _id: req.body.id,
    });
    res.status(200).json({
      message: "Post deleted successfully",
      post: deletedPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
};
