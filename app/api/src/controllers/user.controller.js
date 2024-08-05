import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import appConfig from '../config/app.config.js';

export const registerUser = async (req, res) => {
  const { prenom, email, password, role } = req.body;
  if (!password) {
    res.send('Please enter a password');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.utilisateur.create({
    data: {
      email,
      password: hashedPassword,
      prenom,
      role
    }
  });
  res.json(user);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.utilisateur.findFirst({
    where: {
      email: email
    }
  });

  console.log(appConfig.ACCESS_TOKEN_SECRET);
  if (user && await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({ id: user.id, role: user.role }, appConfig.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }

};

export const getAllUsers = async (req, res) => {
  const users = await prisma.utilisateur.findMany();
  res.json(users);
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.utilisateur.delete({ where: { id } });
    res.send('User deleted successfully');
  } catch (error) {
    res.status(400).json({
      message: "Bad request",
      error: error.message
    })
  } finally {
    await prisma.$disconnect();
  }
}