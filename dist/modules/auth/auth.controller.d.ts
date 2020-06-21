import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/user-login.dto';
import { RegisterUserDto } from './dtos/user-register.dto';
import { IUser } from '@/modules/users/interfaces/user.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    readMe(user: IUser): Promise<{
        data: IUser;
    }>;
    userRegister(registerUserDto: RegisterUserDto): Promise<object>;
    userLogin(loginUserDto: LoginUserDto, res: any): Promise<object>;
}
