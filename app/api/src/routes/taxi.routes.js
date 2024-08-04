import { Router } from 'express';
import { getAllTaxis, createTaxi } from '../controllers/taxi.controller.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';
const router = Router();

//router.get('/', authenticateToken, getAllTaxis);
router.get('/', getAllTaxis);
//router.post('/', authenticateToken, authorizeRole('ADMIN'), createTaxi);
router.post('/', createTaxi);
export default router;
