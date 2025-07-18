import express from 'express';
import dotenv from 'dotenv';
import connectedDB from './db/connection.js';
import bookRoutes from './routes/BookRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectedDB();
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});