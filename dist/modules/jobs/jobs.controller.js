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
exports.JobsController = void 0;
const common_1 = require("@nestjs/common");
const job_dto_1 = require("./dtos/job.dto");
const job_interface_1 = require("./interfaces/job.interface");
const Job_validation_parameter_pipe_1 = require("./pipes/Job-validation-parameter.pipe");
const jobs_service_1 = require("./jobs.service");
const passport_1 = require("@nestjs/passport");
let JobsController = (() => {
    let JobsController = class JobsController {
        constructor(jobsService) {
            this.jobsService = jobsService;
        }
        async criarJob(jobDto) {
            return await this.jobsService.createJob(jobDto);
        }
        async atualizarJob(jobDto, _id) {
            await this.jobsService.updateJob(_id, jobDto);
        }
        async consultarJobs() {
            return this.jobsService.getJobs();
        }
        async consultarJobPorId(_id) {
            return this.jobsService.getJobById(_id);
        }
        async deletarJob(_id) {
            this.jobsService.deleteJob(_id);
        }
    };
    __decorate([
        common_1.Post(),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.UsePipes(common_1.ValidationPipe),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [job_dto_1.JobDto]),
        __metadata("design:returntype", Promise)
    ], JobsController.prototype, "criarJob", null);
    __decorate([
        common_1.Put("/:_id"),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.UsePipes(common_1.ValidationPipe),
        __param(0, common_1.Body()),
        __param(1, common_1.Param("_id", Job_validation_parameter_pipe_1.JobValidationParameterPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [job_dto_1.JobDto, String]),
        __metadata("design:returntype", Promise)
    ], JobsController.prototype, "atualizarJob", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JobsController.prototype, "consultarJobs", null);
    __decorate([
        common_1.Get("/:_id"),
        __param(0, common_1.Param("_id", Job_validation_parameter_pipe_1.JobValidationParameterPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JobsController.prototype, "consultarJobPorId", null);
    __decorate([
        common_1.Delete("/:_id"),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        __param(0, common_1.Param("_id", Job_validation_parameter_pipe_1.JobValidationParameterPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JobsController.prototype, "deletarJob", null);
    JobsController = __decorate([
        common_1.Controller("v3/jobs"),
        __metadata("design:paramtypes", [jobs_service_1.JobsService])
    ], JobsController);
    return JobsController;
})();
exports.JobsController = JobsController;
//# sourceMappingURL=jobs.controller.js.map