import { Module } from '@nestjs/common';
import { LignecommandeService } from './lignecommande.service';
import { LignecommandeController } from './lignecommande.controller';

@Module({
  providers: [LignecommandeService],
  controllers: [LignecommandeController]
})
export class LignecommandeModule {}
