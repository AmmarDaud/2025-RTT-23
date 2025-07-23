import User from '../Models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email already registered' });

    const user = new User({ username, email, password });
    await user.save();

    const { password: _, ...userData } = user.toObject();
    res.status(201).json(userData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.isCorrectPassword(password))) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken(user);
    const { password: _, ...userData } = user.toObject();

    res.json({ token, user: userData });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};