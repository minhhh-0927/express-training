import {
    Body,
    Controller,
    Get,
    Header,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Redirect,
    Req,
    Res
} from '@nestjs/common';
import {Request, Response} from 'express';
import {UsersService} from './users.service';
import {Observable, of} from "rxjs";
import {CreateUserDto} from "./users.interface";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Get()
    async findAll(@Req() req: Request, @Res() res: Response, next: Function): Promise<any> {
        try {
            console.log(req.method);
            const data = await this.userService.findAll();
            res.status(HttpStatus.OK).json(data)
        } catch (e) {
            next(e)
        }
    }

    @Header('Cache-Control', 'none')
    @Get('/special/:id')
    async findSpecial(@Req() req: Request, @Param('id') id, next: Function): Promise<any> {
        try {
            console.log('id: ', id)
            console.log(req.params.id);
            return this.userService.findSpecial();
        } catch (e) {
            next(e)
        }
    }

    @Post()
    @HttpCode(201)
    create(@Body() createUser: CreateUserDto): string {
        console.log(createUser);
        return 'This action adds a new cat';
    }

    @Get('slug*user')
    getSlug(): Observable<any[]> {
        return of(['This route uses a wildcard']);
    }


    @Get('example-redirect')
    @Redirect('https://docs.nestjs.com', 302)
    redirectExample(@Res() res: Response) {
        console.log('This route use a redirect function')
        res.redirect('/users')
    }

    @Get('example-exception')
    getException() {
        throw new HttpException('Forbidden Example', HttpStatus.FORBIDDEN);
    }
}
