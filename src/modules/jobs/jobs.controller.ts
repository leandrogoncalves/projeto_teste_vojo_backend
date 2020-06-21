import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Put,
  Get,
  Delete,
  Param,
  UseGuards,
} from "@nestjs/common";
import { JobDto } from "./dtos/job.dto";
import { IJob } from "@/modules/jobs/interfaces/job.interface";
import { JobValidationParameterPipe } from "@/modules/jobs/pipes/Job-validation-parameter.pipe";
import { JobsService } from "./jobs.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("v3/jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  async criarJob(@Body() jobDto: JobDto): Promise<IJob> {
    return await this.jobsService.createJob(jobDto);
  }

  @Put("/:_id")
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  async atualizarJob(
    @Body() jobDto: JobDto,
    @Param("_id", JobValidationParameterPipe) _id: string
  ): Promise<void> {
    await this.jobsService.updateJob(_id, jobDto);
  }

  @Get()
  async consultarJobs(): Promise<IJob[]> {
    return this.jobsService.getJobs();
  }

  @Get("/:_id")
  async consultarJobPorId(
    @Param("_id", JobValidationParameterPipe) _id: string
  ): Promise<IJob> {
    return this.jobsService.getJobById(_id);
  }

  @Delete("/:_id")
  @UseGuards(AuthGuard('jwt'))
  async deletarJob(
    @Param("_id", JobValidationParameterPipe) _id: string
  ): Promise<void> {
    this.jobsService.deleteJob(_id);
  }
}
