import express from 'express'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv';
import morgan from 'morgan'

dotenv.config();
// console.log(process.env.API_KEY);

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(morgan('dev'))

// === Routes ====
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send("hello......")
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))