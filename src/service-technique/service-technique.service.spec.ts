import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTechniqueService } from './service-technique.service';

describe('ServiceTechniqueService', () => {
  let service: ServiceTechniqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceTechniqueService],
    }).compile();

    service = module.get<ServiceTechniqueService>(ServiceTechniqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
