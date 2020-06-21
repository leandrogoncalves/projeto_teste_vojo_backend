"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const mongoose_2 = require("mongoose");
const user_interface_1 = require("../users/interfaces/user.interface");
let AuthService = (() => {
    let AuthService = class AuthService {
        constructor(userModel, jwtService) {
            this.userModel = userModel;
            this.jwtService = jwtService;
            this.saltRounds = parseInt(process.env.BCRYPT_ROUNDS);
        }
        async createUser(data) {
            const { email, cellphone } = data;
            let user = await this.userModel.findOne({ $or: [{ email }, { cellphone }] }).exec();
            if (user)
                throw new common_1.HttpException('E-mail ou telefone já cadastrado.', common_1.HttpStatus.BAD_REQUEST);
            const hashedPassword = bcrypt.hashSync(data.password, this.saltRounds);
            user = new this.userModel({
                email: data.email,
                cellphone: data.cellphone,
                firstName: data.firstName,
                lastName: data.lastName,
                password: hashedPassword
            });
            try {
                user = await user.save();
                return user;
            }
            catch (err) {
                throw new Error(err);
            }
        }
        async signinUser(data) {
            const user = await this.userModel.findOne({ $or: [{ email: data.username }, { cellphone: data.username }] }).exec();
            if (!user)
                throw new common_1.HttpException('Login inválido.', common_1.HttpStatus.BAD_REQUEST);
            const validatePassword = await bcrypt.compare(data.password, user.password || '');
            if (!validatePassword)
                throw new common_1.HttpException('Login inválido.', common_1.HttpStatus.BAD_REQUEST);
            const payload = { id: user._id, permission: 'USER' };
            const accessToken = await this.jwtService.sign(payload);
            return accessToken;
        }
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('User')),
        __metadata("design:paramtypes", [mongoose_2.Model,
            jwt_1.JwtService])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map