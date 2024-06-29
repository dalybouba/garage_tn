import { Test, TestingModule } from '@nestjs/testing';
import { LivraisonController } from './livraison.controller';

describe('LivraisonController', () => {
  let controller: LivraisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivraisonController],
    }).compile();

    controller = module.get<LivraisonController>(LivraisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
