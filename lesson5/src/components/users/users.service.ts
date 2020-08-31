import {Injectable} from '@nestjs/common';
import {User, UserSpecial} from "./users.interface";

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    validateToken(token: string) {
        console.log(token);
        return true;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findSpecial(): Promise<UserSpecial> {
        const userSpecial: UserSpecial = {
            name: 'Minh',
            type: 1
        };
        console.log(userSpecial)
        return userSpecial;
    }

    async getUserByToken(token: any) {
        console.log(token);
        return true;
    }
}
