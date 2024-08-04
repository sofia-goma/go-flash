import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllTaxis = async (req, res) => {
  const taxis = await prisma.taxi.findMany();
  res.json(taxis);
};

export const createTaxi = async (req, res) => {
  const { chauffeurId, disponibilite, location } = req.body;
  const taxi = await prisma.taxi.create({
    data: {
      chauffeurId,
      disponibilite,
      location
    }
  });
  res.json(taxi);
};