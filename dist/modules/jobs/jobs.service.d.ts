import { Model } from "mongoose";
import { IJob } from "./interfaces/job.interface";
import { JobDto } from "./dtos/job.dto";
export declare class JobsService {
    private readonly jobModel;
    private readonly logger;
    constructor(jobModel: Model<IJob>);
    createJob(jobDto: JobDto): Promise<IJob>;
    updateJob(_id: string, jobDto: JobDto): Promise<void>;
    getJobs(): Promise<IJob[]>;
    getJobById(_id: string): Promise<IJob>;
    deleteJob(_id: string): Promise<void>;
}
