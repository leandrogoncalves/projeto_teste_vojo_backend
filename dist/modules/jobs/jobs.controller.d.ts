import { JobDto } from "./dtos/job.dto";
import { IJob } from "@/modules/jobs/interfaces/job.interface";
import { JobsService } from "./jobs.service";
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    criarJob(jobDto: JobDto): Promise<IJob>;
    atualizarJob(jobDto: JobDto, _id: string): Promise<void>;
    consultarJobs(): Promise<IJob[]>;
    consultarJobPorId(_id: string): Promise<IJob>;
    deletarJob(_id: string): Promise<void>;
}
