import { Router } from 'express';
import { getAllCommandes, createCommande } from '../controllers/commande.controller.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';


const router = Router();
router.get('/', authenticateToken, getAllCommandes);
router.post('/', authenticateToken, authorizeRole('CLIENT'), createCommande);
export default router;
