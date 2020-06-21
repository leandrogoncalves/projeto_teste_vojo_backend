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
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const mongoose_2 = require("mongoose");
const user_interface_1 = require("../users/interfaces/user.interface");
let JwtStrategy = (() => {
    let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
        constructor(userModel) {
            super({
                jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: process.env.JWT_SECRETKEY,
            });
            this.userModel = userModel;
        }
        async validate(payload) {
            const { id: _id } = payload;
            const user = await this.userModel
                .findOne({ _id, isActive: true }, "email cellphone firstName lastName")
                .exec();
            if (!user) {
                throw new common_1.HttpException("Você não tem permissão.", common_1.HttpStatus.UNAUTHORIZED);
            }
            return user;
        }
    };
    JwtStrategy = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel("User")),
        __metadata("design:paramtypes", [mongoose_2.Model])
    ], JwtStrategy);
    return JwtStrategy;
})();
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map