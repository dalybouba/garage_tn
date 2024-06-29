import { Module } from '@nestjs/common';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FactureSchema } from './facture.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Facture', schema: FactureSchema }])],
  providers: [FactureService],
  controllers: [FactureController]
})
export class FactureModule {}
