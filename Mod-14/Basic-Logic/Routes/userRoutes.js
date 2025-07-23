import express from 'express';
import User from "../Models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// POST /api/users/register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    const newUser = new User({ username, email, password });
    await newUser.save();

    const { password: _, ...userData } = newUser.toObject();
    res.status(201).json(userData);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// POST /api/users/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Incorrect email or password." });

    const isMatch = await user.isCorrectPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect email or password." });

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

export default router;