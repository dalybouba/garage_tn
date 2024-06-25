import { Test, TestingModule } from '@nestjs/testing';
import { LignecommandeController } from './lignecommande.controller';

describe('LignecommandeController', () => {
  let controller: LignecommandeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LignecommandeController],
    }).compile();

    controller = module.get<LignecommandeController>(LignecommandeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
