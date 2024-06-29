import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTechniqueController } from './service-technique.controller';

describe('ServiceTechniqueController', () => {
  let controller: ServiceTechniqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceTechniqueController],
    }).compile();

    controller = module.get<ServiceTechniqueController>(ServiceTechniqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
