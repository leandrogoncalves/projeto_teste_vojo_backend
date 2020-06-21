import { Test, TestingModule } from "@nestjs/testing";
import { JobsService } from "./jobs.service";
import { getModelToken } from "@nestjs/mongoose";

describe("JobsService", () => {
  let service: JobsService;

  beforeEach(async () => {
    function mockUserModel(dto: any) {
      this.data = dto;
      this.save = () => {
        return this.data;
      };
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobsService,
        {
          provide: getModelToken("Jobs"),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<JobsService>(JobsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
