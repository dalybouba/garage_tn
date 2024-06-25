import { Test, TestingModule } from '@nestjs/testing';
import { LignecommandeService } from './lignecommande.service';

describe('LignecommandeService', () => {
  let service: LignecommandeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LignecommandeService],
    }).compile();

    service = module.get<LignecommandeService>(LignecommandeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
