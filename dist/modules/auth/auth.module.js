"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const user_schema_1 = require("../users/schemas/user.schema");
const jwt_strategy_1 = require("./jwt.strategy");
let AuthModule = (() => {
    let AuthModule = class AuthModule {
    };
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                passport_1.PassportModule.register({
                    defaultStrategy: 'jwt'
                }),
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRETKEY
                }),
                mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }])
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
            exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule]
        })
    ], AuthModule);
    return AuthModule;
})();
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map