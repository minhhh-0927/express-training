import { Request, Response } from 'express';

export function errorMiddleware(req: Request, res: Response, next: Function) {
  console.log(`Request...`);
  next();
}