import {
  Injectable,
  BadRequestException,
  NotFoundException,
  Logger,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IJob } from "./interfaces/job.interface";
import { JobDto } from "./dtos/job.dto";

@Injectable()
export class JobsService {
  private readonly logger = new Logger();

  constructor(
    @InjectModel("Jobs") private readonly jobModel: Model<IJob>
  ) {}

  async createJob(jobDto: JobDto): Promise<IJob> {
    const { title } = jobDto;

    const JobFound = await this.jobModel.findOne({ title }).exec();

    if (JobFound) {
      throw new BadRequestException(`O titulo ${title} já esta cadastrado`);
    }

    try {
      const job = new this.jobModel(jobDto);
      return await job.save();
    } catch (err) {
      this.logger.error(`Ocorreu um erro ao incluir vaga. Detalhes ${err}`);
      throw new Error(err);
    }
  }

  async updateJob(_id: string, jobDto: JobDto): Promise<void> {
    const JobFound = await this.jobModel.findOne({ _id }).exec();

    if (!JobFound) {
      throw new NotFoundException(
        `Nehuma vaga com id ${_id} não foi encontrada`
      );
    }

    const job = { ...jobDto };
    
    if (JobFound.title === job.title) {
      delete job.title;
    }

    try {
      await this.jobModel.findOneAndUpdate(
        {
          _id,
        },
        {
          $set: job,
        }
      ).exec();
    } catch (err) {
      this.logger.error(`Ocorreu um erro ao atualizar vaga. Detalhes ${err}`);
      throw new Error(err);
    }
  }

  async getJobs(): Promise<IJob[]> {
    return await this.jobModel.find().exec();
  }

  async getJobById(_id: string): Promise<IJob> {
    const JobFound = await this.jobModel.findOne({ _id }).exec();
    if (!JobFound) {
      throw new NotFoundException(`Nenhuma vaga encontrado com o id ${_id}`);
    }
    return JobFound;
  }

  async deleteJob(_id: string): Promise<void> {
    const JobFound = await this.getJobById(_id);

    if (JobFound) {
      try {
        this.jobModel.deleteOne({ _id }).exec();
      } catch (err) {
        this.logger.error(`Ocorreu um erro ao excluir vaga. Detalhes ${err}`);
        throw new Error(err);
      }
    }
  }
}
