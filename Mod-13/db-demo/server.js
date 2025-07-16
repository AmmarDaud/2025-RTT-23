import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("social-media").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");

    } catch (err) {
    console.error("MongoDB connection error:", err);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello, from API!");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));