import mongoose from "mongoose"
import { Schema } from "mongoose"

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    minlength: [3, "User name must be at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"], 
  },
  age: {
    type: Number,
    min: [18, "Must be at least 18 years old"],
    max: 120,
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin", "moderator"],
      message: "{VALUE} is not a supported role",
    },
    default: "user",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  isVerified: Boolean,
});

export default mongoose.model("User", userSchema);