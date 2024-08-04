import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && req.headers['authorization'].split(' ')[1];
  if (!token || token == null) {
    res.sendStatus(401);
    return;
  } 
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    next();
  } catch {
    res.sendStatus(403);
    return;
  }
};

export const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.sendStatus(403);
      return;
    }
    next();
  };
};