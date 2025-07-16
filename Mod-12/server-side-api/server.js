import express from 'express';

const app = express();
const port = 3000;

// Activity 1: /api/comments - transformed data
app.get('/api/comments', async (req, res) => {
  try {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/comments');

    if (!apiResponse.ok) {
      throw new Error(`API error: ${apiResponse.status}`);
    }

    const comments = await apiResponse.json();

    const transformed = comments.map(comment => {
      return `${comment.email} commented: ${comment.name}`;
    });

    res.json(transformed);
  } catch (error) {
    console.error('Error in /api/comments:', error.message);
    res.status(502).json({ message: 'Failed to fetch or transform comments.' });
  }
});

// Activity 2: /api/users/:id - robust error handling
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  try {
    const apiResponse = await fetch(url);

    if (apiResponse.status === 404) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!apiResponse.ok) {
      throw new Error(`API responded with status ${apiResponse.status}`);
    }

    const user = await apiResponse.json();
    res.json(user);
  } catch (error) {
    console.error('Error in /api/users/:id:', error.message);
    res.status(502).json({ message: 'Failed to retrieve user from external API.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});