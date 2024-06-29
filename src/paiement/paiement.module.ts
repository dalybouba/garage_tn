import { Module } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { PaiementController } from './paiement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaiementSchema } from './paiement.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Paiement', schema: PaiementSchema }])],
  providers: [PaiementService],
  controllers: [PaiementController]
})
export class PaiementModule {}
