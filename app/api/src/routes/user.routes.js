import { Router } from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/user.controller.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';
import cors from 'cors';
const router = Router();


// const corsOptions = {
//    origin: 'http://localhost:5173', // your frontend's URL
//    optionsSuccessStatus: 200
//  };
 
//  app.use(cors(corsOptions));

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
// router.get('/allusers', authenticateToken, authorizeRole('ADMIN'), getAllUsers);
//router.get('/', getAllUsers);
export default router;
