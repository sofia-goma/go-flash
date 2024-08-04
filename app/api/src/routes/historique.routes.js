import { Router } from 'express';
import { getAllHistoriques, createHistorique } from '../controllers/historique.controller.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';


const router = Router();
router.get('/', getAllHistoriques);
router.post('/', authenticateToken, authorizeRole('CHAUFFEUR'), createHistorique);
export default router;
