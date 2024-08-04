import express from 'express';
import userRoutes from './routes/user.routes.js';
import taxiRoutes from './routes/taxi.routes.js';
import commandeRoutes from './routes/commande.routes.js';
import historiqueRoutes from './routes/historique.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/taxis', taxiRoutes);
app.use('/api/commandes', commandeRoutes);
app.use('/api/historiques', historiqueRoutes);

app.use('*', function(_, res){
    res.sendStatus(404);
});

export default app;