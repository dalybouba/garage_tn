import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { LigneCommandeModule } from './ligne-commande/ligne-commande.module';
import { LignecommandeService } from './lignecommande/lignecommande.service';
import { LignecommandeModule } from './lignecommande/lignecommande.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/garageTn'),
    UserModule,
    ArticleModule,
    LigneCommandeModule,
    LignecommandeModule,
  ],
  controllers: [AppController],
  providers: [AppService, LignecommandeService],
})
export class AppModule {}
