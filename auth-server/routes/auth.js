import { Router } from 'express';
import { authenticateToken } from '../../middleware/authMiddleware.js';
import { LoginUserController } from '../controllers/LoginUserController.js';
import { RegisterUserController } from '../controllers/RegisterUserController.js';
import { GetUserController } from '../controllers/GetUserController.js';
import { UpdateUserController } from '../controllers/UpdateUserController.js';
import { RefreshTokenController } from '../controllers/RefreshTokenController.js';

const router = Router();

// GET USER
router.get('/verify-user', authenticateToken, GetUserController);
// REGISTER
router.post('/register', RegisterUserController);
// LOGIN
router.post('/login', LoginUserController);
// UPDATE USER
router.put('/update/:id', authenticateToken, UpdateUserController);
// REFRESH TOKEN
router.post('/refresh-token', RefreshTokenController);

export default router;
