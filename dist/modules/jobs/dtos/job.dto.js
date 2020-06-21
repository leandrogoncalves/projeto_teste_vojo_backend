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
exports.JobDto = void 0;
const class_validator_1 = require("class-validator");
let JobDto = (() => {
    class JobDto {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(10, { message: "O titulo deve ter pelo menos 10 caracteres." }),
        __metadata("design:type", String)
    ], JobDto.prototype, "title", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(50, { message: "A Descrição deve ter pelo menos 50 caracteres." }),
        __metadata("design:type", String)
    ], JobDto.prototype, "description", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], JobDto.prototype, "requirements", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], JobDto.prototype, "type", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], JobDto.prototype, "sector", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], JobDto.prototype, "functions", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], JobDto.prototype, "level", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        __metadata("design:type", Number)
    ], JobDto.prototype, "salary", void 0);
    return JobDto;
})();
exports.JobDto = JobDto;
//# sourceMappingURL=job.dto.js.map