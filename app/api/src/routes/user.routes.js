import { Router } from 'express';
import { registerUser, loginUser, getAllUsers, remove } from '../controllers/user.controller.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';
const router = Router();


router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
router.get(authenticateToken, authorizeRole('ADMIN'), getAllUsers);
router.route('/:userId').delete(remove);
export default router;