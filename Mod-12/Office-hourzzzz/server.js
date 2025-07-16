import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/boogers", (req, res) => {
  res.redirect("https://www.google.com");
});
app.get("*", (req, res) => {
  res.status(404).send("uh oh, that webpage does not exist - please try again");
});
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
