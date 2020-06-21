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
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JobsService = (() => {
    let JobsService = class JobsService {
        constructor(jobModel) {
            this.jobModel = jobModel;
            this.logger = new common_1.Logger();
        }
        async createJob(jobDto) {
            const { title } = jobDto;
            const JobFound = await this.jobModel.findOne({ title }).exec();
            if (JobFound) {
                throw new common_1.BadRequestException(`O titulo ${title} já esta cadastrado`);
            }
            try {
                const job = new this.jobModel(jobDto);
                return await job.save();
            }
            catch (err) {
                this.logger.error(`Ocorreu um erro ao incluir vaga. Detalhes ${err}`);
                throw new Error(err);
            }
        }
        async updateJob(_id, jobDto) {
            const JobFound = await this.jobModel.findOne({ _id }).exec();
            if (!JobFound) {
                throw new common_1.NotFoundException(`Nehuma vaga com id ${_id} não foi encontrada`);
            }
            try {
                await this.jobModel.findOneAndUpdate({
                    _id,
                }, {
                    $set: jobDto,
                }).exec();
            }
            catch (err) {
                this.logger.error(`Ocorreu um erro ao atualizar vaga. Detalhes ${err}`);
                throw new Error(err);
            }
        }
        async getJobs() {
            return await this.jobModel.find().exec();
        }
        async getJobById(_id) {
            const JobFound = await this.jobModel.findOne({ _id }).exec();
            if (!JobFound) {
                throw new common_1.NotFoundException(`Nenhuma vaga encontrado com o id ${_id}`);
            }
            return JobFound;
        }
        async deleteJob(_id) {
            const JobFound = await this.getJobById(_id);
            if (JobFound) {
                try {
                    this.jobModel.deleteOne({ _id }).exec();
                }
                catch (err) {
                    this.logger.error(`Ocorreu um erro ao excluir vaga. Detalhes ${err}`);
                    throw new Error(err);
                }
            }
        }
    };
    JobsService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel("Jobs")),
        __metadata("design:paramtypes", [mongoose_2.Model])
    ], JobsService);
    return JobsService;
})();
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map