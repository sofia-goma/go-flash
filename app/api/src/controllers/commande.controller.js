import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllCommandes = async (req, res) => {
  const commandes = await prisma.commande.findMany();
  res.json(commandes);
};

export const createCommande = async (req, res) => {
  const { clientId, taxiId, dateCommande, status } = req.body;
  const commande = await prisma.commande.create({
    data: {
      clientId,
      taxiId,
      dateCommande,
      status
    }
  });
  res.json(commande);
};