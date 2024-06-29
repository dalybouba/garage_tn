import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LignecommandeModule } from 'src/lignecommande/lignecommande.module';
import { CommandeSchema } from './commande.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Commande', schema: CommandeSchema }]),
    LignecommandeModule,
  ],
  providers: [CommandeService],
  controllers: [CommandeController]
})
export class CommandeModule {}
