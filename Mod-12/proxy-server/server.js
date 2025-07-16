import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my Proxy Server");
});

app.get("/api/users", async (req, res) => {
  try {
    const apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    );

    if (!apiResponse.ok) {
      throw new Error(`HTTP error! status: ${apiResponse.status}`);
    }

    const users = await apiResponse.json();

    const transformedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));

    res.json(transformedUsers);

    
  } catch (error) {
    console.error("Error fetching or transforming users:", error);
    // Send a generic server error response
    res
      .status(500)
      .json({ message: "Failed to fetch data from the external API." });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on port: ${PORT}`));