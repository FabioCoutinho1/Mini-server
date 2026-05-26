import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export class Middleware {
  public authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(400).json({ message: "Token Invalido" });
    }

    const [, token] = authHeader.split(" ");

    try {
      const decode = jwt.verify(token!, process.env.JWT_SECRET!);

      req.userId = decode.sub as string;

      next();
    } catch {
      return res.status(400).json({ message: "Token Invalido" });
    }
  };
}
