import { Injectable, NestMiddleware } from '@nestjs/common';
import {Request, Response} from 'express';
import {UsersService} from "../components/users/users.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware<Request|any, Response> {

  constructor(
      private readonly usersService: UsersService
  ) {}
  async use(req: Request|any, res: Response, next: Function) {

    const token = req.header('authorization');
    console.log(token)
    if(!token) {
      next();
      return;
    }
    // const user = await this.usersService.getUserByToken(token);
    // if(!user) {
    //   next();
    //   return;
    // }
    // request.user = user;
    next();
  }
}