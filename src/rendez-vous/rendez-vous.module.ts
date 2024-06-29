import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RendezVousSchema } from './rendez-vous.model';
import { RendezVousService } from './rendez-vous.service';
import { RendezVousController } from './rendez-vous.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'RendezVous', schema: RendezVousSchema }])],
  controllers: [RendezVousController],
  providers: [RendezVousService],
})
export class RendezVousModule {}
