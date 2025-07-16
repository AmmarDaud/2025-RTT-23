import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// POST /api/books - Create a new book
router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/books - Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// GET /api/books/:id - Get a book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).orFail();
    res.json(book);
  } catch (err) {
    res.status(404).json({ error: "Book not found" });
  }
});

// PUT /api/books/:id - Update a book by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).orFail();
    res.json(updatedBook);
  } catch (err) {
    res.status(404).json({ error: "Book not found or update failed" });
  }
});

// DELETE /api/books/:id - Delete a book by ID
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id).orFail();
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(404).json({ error: "Book not found or delete failed" });
  }
});

export default router;
