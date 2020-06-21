import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JobsController } from "./jobs.controller";
import { JobsService } from "@/modules/jobs/jobs.service";
import { JobSchema } from "@/modules/jobs/schemas/job.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Jobs",
        schema: JobSchema,
      },
    ]),
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
