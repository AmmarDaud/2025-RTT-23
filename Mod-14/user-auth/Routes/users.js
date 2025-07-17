import express from "express";
import User from "../Models/User.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User endpoint");
});

router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // find the user by the email
    const user = await User.findOne({ email: email });
    console.log("USER", user);

    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    // compare the password with the hashed password
    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
        return res.status(400).json({ message: "Incorrect email or password" });
    }

    res.json({Message: "Success", user: user});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;