import express from 'express'
import { getAllUsers, createUser, getUser } from '../controllers/usercontroller.js';

const router = express.Router();

// middleware
router.use(express.json());
// router.use((req, res, next) => {
//     console.log('Method:', req.method);
//     console.log('Path:', req.path);
//     console.log('Time:', Date.now());
//     next();
// })

/**
 * GET /api/users/
 */
router.get('/', getAllUsers);

/**
 * POST /api/users/
 */
router.post('/', createUser);

/**
 * GET /api/users/:id
 */
router.get('/:id', getUser)


export default router