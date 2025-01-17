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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
const class_validator_1 = require("class-validator");
let RegisterUserDto = (() => {
    class RegisterUserDto {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsAlpha(),
        __metadata("design:type", String)
    ], RegisterUserDto.prototype, "firstName", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsAlpha(),
        __metadata("design:type", String)
    ], RegisterUserDto.prototype, "lastName", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], RegisterUserDto.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsMobilePhone(),
        class_validator_1.IsPhoneNumber(null),
        __metadata("design:type", String)
    ], RegisterUserDto.prototype, "cellphone", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(6, { message: "Senha deve ter pelo menos 6 caracteres." }),
        __metadata("design:type", String)
    ], RegisterUserDto.prototype, "password", void 0);
    return RegisterUserDto;
})();
exports.RegisterUserDto = RegisterUserDto;
//# sourceMappingURL=user-register.dto.js.map