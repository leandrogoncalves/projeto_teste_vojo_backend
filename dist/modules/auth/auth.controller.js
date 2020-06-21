"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const get_user_decorator_1 = require("./decorators/get-user.decorator");
const user_login_dto_1 = require("./dtos/user-login.dto");
const user_register_dto_1 = require("./dtos/user-register.dto");
const user_interface_1 = require("../users/interfaces/user.interface");
let AuthController = (() => {
    let AuthController = class AuthController {
        constructor(authService) {
            this.authService = authService;
        }
        async readMe(user) {
            return { data: user };
        }
        async userRegister(registerUserDto) {
            const user = await this.authService.createUser(registerUserDto);
            return { data: {} };
        }
        async userLogin(loginUserDto, res) {
            const accessToken = await this.authService.signinUser(loginUserDto);
            res.header('Vojo-Authorization', `${accessToken}`);
            res.end();
            return { data: null };
        }
    };
    __decorate([
        common_1.Get('me'),
        common_1.UseGuards(passport_1.AuthGuard()),
        __param(0, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "readMe", null);
    __decorate([
        common_1.Post('register'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_register_dto_1.RegisterUserDto]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "userRegister", null);
    __decorate([
        common_1.Post('login'),
        common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
        __param(0, common_1.Body()), __param(1, common_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_login_dto_1.LoginUserDto, Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "userLogin", null);
    AuthController = __decorate([
        common_1.Controller('v3/auth'),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
})();
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map