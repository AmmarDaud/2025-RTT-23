import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRouter from "./Routes/users.js";
import postRouter from "./Routes/posts.js";
import productRouter from "./Routes/product.js";

dotenv.config();

const app = express();
const PORT = 3000;
const uri = process.env.MONGO_URI;

// ====== middleware =======
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/posts", postRouter);
app.use("/api/products", productRouter);

// Connect to MongoDB using Mongoose
mongoose
  .connect(uri)
  .then(console.log("Connected successfully to MongoDB!"))
  .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));

// ======= Routes ===========
app.get("/", async (req, res) => {
  res.status(200).json({ message: "Successfully connected to the database!" });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));