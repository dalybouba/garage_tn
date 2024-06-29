import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceTechniqueSchema } from './service-technique.model';
import { ServiceTechniqueService } from './service-technique.service';
import { ServiceTechniqueController } from './service-technique.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ServiceTechnique', schema: ServiceTechniqueSchema }])],
  controllers: [ServiceTechniqueController],
  providers: [ServiceTechniqueService],
})
export class ServiceTechniqueModule {}
