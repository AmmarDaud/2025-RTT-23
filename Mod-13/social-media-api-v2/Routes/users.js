import express from 'express';
import User from '../models/users.js';

const router = express.Router();

// create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// get all users  /api/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// get an user by the id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// find user by username
// /api/users/username/:username
router.get("/username/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;