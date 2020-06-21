import { Test, TestingModule } from "@nestjs/testing";
import { JobsController } from "./jobs.controller";
import { JobsService } from "./jobs.service";
import { getModelToken } from "@nestjs/mongoose";

describe("Jobs Controller", () => {
  let controller: JobsController;

  beforeEach(async () => {
    function mockUserModel(dto: any) {
      this.data = dto;
      this.save = () => {
        return this.data;
      };
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [
        JobsService,
        {
          provide: getModelToken("Jobs"),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    controller = module.get<JobsController>(JobsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
