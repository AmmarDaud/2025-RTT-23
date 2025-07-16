import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
connectDB()
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`);
  });
});