import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { LignecommandeService } from './lignecommande/lignecommande.service';

import { CommandeModule } from './commande/commande.module';
import { LivraisonModule } from './livraison/livraison.module';
import { PaiementModule } from './paiement/paiement.module';
import { FactureModule } from './facture/facture.module';
import { ServiceTechniqueModule } from './service-technique/service-technique.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { AuthModule } from './auth/auth.module';
import { LignecommandeModule } from './lignecommande/lignecommande.module';
import { MailService } from './mail-service/mail-service.service';
import { NotificationService } from './notification/notification.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/garageTn'),
    UserModule,
    ArticleModule,
    LignecommandeModule,
    CommandeModule,
    LivraisonModule,
    PaiementModule,
    FactureModule,
    ServiceTechniqueModule,
    RendezVousModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, LignecommandeService, MailService, NotificationService],
})
export class AppModule {}
