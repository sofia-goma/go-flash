import express from 'express';
import userRoutes from './routes/user.routes.js';
import taxiRoutes from './routes/taxi.routes.js';
import commandeRoutes from './routes/commande.routes.js';
import historiqueRoutes from './routes/historique.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import appConfig from './config/app.config.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/verifytoken', (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ isValid: false, message: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, appConfig.ACCESS_TOKEN_SECRET);
        return res.status(200).json({ isValid: true, decoded });
    } catch (error) {
        return res.status(401).json({ isValid: false, message: 'Invalid token' });
    }
});

app.use('/api/users', userRoutes);
app.use('/api/taxis', taxiRoutes);
app.use('/api/commandes', commandeRoutes);
app.use('/api/historiques', historiqueRoutes);

app.use('*', function (_, res) {
    res.sendStatus(404);
});

export default app;