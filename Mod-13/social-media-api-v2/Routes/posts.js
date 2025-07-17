import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// Create a new post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status;
  }
});

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// get all posts for an user
// endpoint -> /api/posts/user/:username
router.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const userPosts = await Post.find({ author: username });
    res.json(userPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// search for posts
// Find all posts by 'John Doe' that are NOT hidden
router.get("/search", async (req, res) => {
  const { author, hidden } = req.query;
  try {
    const posts = await Post.find({ $or: [{ author }, { hidden }] });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Post.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});


export default router;