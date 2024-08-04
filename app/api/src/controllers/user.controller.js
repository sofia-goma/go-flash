import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  const { prenom, email, password, role } = req.body;
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

  
  if (user && await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
    
};

export const getAllUsers = async (req, res) => {
  const users = await prisma.utilisateur.findMany();
  res.json(users);
};