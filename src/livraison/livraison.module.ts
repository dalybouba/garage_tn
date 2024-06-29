import { Module } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { LivraisonController } from './livraison.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LivraisonSchema } from './livraison.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Livraison', schema: LivraisonSchema }])],
  providers: [LivraisonService],
  controllers: [LivraisonController]
})
export class LivraisonModule {}
