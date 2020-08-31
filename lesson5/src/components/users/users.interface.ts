export interface User {
    name: string;
    age: number;
}

export enum UserType {
    staff = 0,
    superuser = 1
}

export interface UserSpecial {
    name: string;
    type: UserType
}

export class CreateUserDto {
    name: string;
    age: number;
}