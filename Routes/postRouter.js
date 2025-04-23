const express = require("express");
const postController = require("../controllers/postController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/", authMiddleware, postController.createPost);
router.get("/:author", postController.getAllPosts);
router.patch("/", postController.updatePost);
router.delete("/", postController.deletePost);
module.exports = router;
