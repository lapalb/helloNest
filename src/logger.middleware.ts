import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Incoming Request to ` + req.url);
  console.log(`Incoming Request from IP ` + req.ip);
  next();
};