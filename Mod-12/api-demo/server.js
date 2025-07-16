import express from "express";

const app = express();
const PORT = 3000;

// ==== Middleware ====

// ======== Routes ================//

/**
 * GET /
 * @description return a hello message
 */
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my API!</h1>");
});

/**
 * GET /users/:userId
 * @description return a user byt the user id
 */
app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  res.send(`Sending user data for user id ${userId}`);
});

/**
 * GET /books/:bookId/chapter/:chapterNum
 */
app.get("/books/:bookId/chapter/:chapterNum", (req, res) => {
  const { bookId, chapterNum } = req.params;

  console.log("Book ID:", bookId);
  console.log("Chapter Num:", chapterNum);
  res.send(`Sending data for book ${bookId} chapter ${chapterNum}`);
});

/**
 * GET /users/profile/:username
 */
app.get("/users/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`Sending data for user: ${req.params.username}`);
});

/**
 * GET /search ?q&sort
 */
app.get("/search", (req, res) => {
  console.log(req.query);
  const searchTerm = req.query.q || "nothing";
  const sort = req.query.sort || "none";

  // query our db for the searchTerm and sort them by sort

  res.send(`Sending data about ${searchTerm} sorted by ${sort}`);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
