import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { IUser } from '@/modules/users/interfaces/user.interface';
import { LoginUserDto } from './dtos/user-login.dto';
import { RegisterUserDto } from './dtos/user-register.dto';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<IUser>, jwtService: JwtService);
    private readonly saltRounds;
    createUser(data: RegisterUserDto): Promise<IUser>;
    signinUser(data: LoginUserDto): Promise<string>;
}
