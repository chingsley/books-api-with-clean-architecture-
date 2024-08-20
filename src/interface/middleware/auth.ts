import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


interface UserPayload {
  id: string;
  email: string;
}

//Augment the existing 'Request' interface from exporess
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user as UserPayload;
    next();
  });
}