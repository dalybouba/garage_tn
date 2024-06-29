import { Test, TestingModule } from '@nestjs/testing';
import { LivraisonService } from './livraison.service';

describe('LivraisonService', () => {
  let service: LivraisonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivraisonService],
    }).compile();

    service = module.get<LivraisonService>(LivraisonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
