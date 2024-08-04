import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllHistoriques = async (req, res) => {
  const historiques = await prisma.historique.findMany();
  res.json(historiques);
};

export const createHistorique = async (req, res) => {
  const { chauffeurId, clientId, commandeId, dateCourse } = req.body;
  const historique = await prisma.historique.create({
    data: {
      chauffeurId,
      clientId,
      commandeId,
      dateCourse
    }
  });
  res.json(historique);
};